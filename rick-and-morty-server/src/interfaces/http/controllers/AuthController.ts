import { inject } from 'inversify';
import {
    BaseHttpController,
    controller,
    httpGet,
    httpPost,
    requestBody,
    response,
    results,
} from 'inversify-express-utils';
import { AuthApplication } from '@application/auth/AuthApplication';
import { TYPES } from '@constants/types';
import { SignUpRequestBody } from './requests/SignUpRequestBody';
import { SignUpRequest } from './requests/SignUpRequest';
import { AuthenticationRequestBody } from './requests/AuthenticateRequestBody';
import { IAuthenticationHandler } from '@core/IAuthenticationHandler';
import { AuthRequest } from '@application/auth/requests/AuthRequest';
import { Response, CookieOptions } from 'express';
import config from '@config/main';

// temporal
const accessTokenCookieOptions: CookieOptions = {
    expires: new Date(
        Date.now() + config.ACCESS_TOKEN_EXPIRES_IN * 60 * 1000,
    ),
    maxAge: config.ACCESS_TOKEN_EXPIRES_IN * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
};

const refreshTokenCookieOptions: CookieOptions = {
    expires: new Date(
        Date.now() + config.REFRESH_TOKEN_EXPIRE_IN * 60 * 1000,
    ),
    maxAge: config.REFRESH_TOKEN_EXPIRE_IN * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
};

@controller('/api/v1/auth')
export class AuthController extends BaseHttpController {
    constructor(
        @inject(TYPES.AuthApplication)
        private readonly service: AuthApplication,
        @inject(TYPES.AuthenticationHandler)
        private readonly authHandler: IAuthenticationHandler,
    ) { super(); }

    @httpPost('/signup')
    public async create(
        @requestBody()
            { username, email, password }: SignUpRequestBody,
    ): Promise<results.JsonResult> {
        const user = await this.service.register(
            new SignUpRequest(username, email, password),
        );
        return this.json(user);
    }

    @httpPost('/login')
    public async signIn(
        @requestBody() { email, password }: AuthenticationRequestBody,
        @response() res: Response,
    ): Promise<results.JsonResult> {
        const authenticate = await this.authHandler.authenticate(
            new AuthRequest(email, password),
        );
        res.cookie("access_token", authenticate.token, accessTokenCookieOptions);
        res.cookie('refresh_token', authenticate.refreshToken, refreshTokenCookieOptions);
        res.cookie('logged_in', true, {
            ...accessTokenCookieOptions,
            httpOnly: true,
        });
        return this.json(authenticate.token);
    }

    @httpGet('/logout')
    public logout(
        @response() res: Response,
    ): results.JsonResult {
        res.cookie("access_token", '', { maxAge: 1 });
        res.cookie('refresh_token', '', { maxAge: 1 });
        res.cookie('logged_in', true, { maxAge: 1 });
        return this.json({ success: true });
    }
    
}