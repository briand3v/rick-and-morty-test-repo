import { JWTAccessTokenRequest } from "@application/auth/requests/JWTAccessTokenRequest";
import { UserApplication } from "@application/user/UserApplication";
import { TYPES } from "@constants/types";
import config from '@config//main';
import { IAuthenticationHandler } from "@core/IAuthenticationHandler";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";

@injectable()
export class DeserializeUserMiddleware extends BaseMiddleware {
    constructor(
        @inject(TYPES.AuthenticationHandler) private readonly authHandler: IAuthenticationHandler,
        @inject(TYPES.UserApplication) private readonly userService: UserApplication,
    ) {
        super();
    }
    public async handler(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {
            let access_token;

            if (
                req.headers.authorization &&
                req.headers.authorization.startsWith('Bearer')
            ) {
                access_token = req.headers.authorization.split(' ')[1];
            } else if (req.cookies.access_token) {
                access_token = req.cookies.access_token;
            }
            
            if (!access_token) {
                // return next(new Error('You are not logged in'));
                return next(null);
            }

            // now validate Access token
            const decoded = await this.authHandler.verifyAccessToken(
                new JWTAccessTokenRequest(
                    access_token,
                    config.accessTokenPrivateKey,
                ),
            );

            if (!decoded) {
                // return next(new Error(`Invalid token or user doesn't exist`));
                return next(null);
            }

            // feature check session with redis or other service

            // check user
            const user = this.userService.getUser(decoded.user);
            if (!user) {
                return next(new Error(`User with that token no longer exist`));
            }

            res.locals.user = user;

            next();
        } catch (err: any) {
            next(err);
        }
    }
}