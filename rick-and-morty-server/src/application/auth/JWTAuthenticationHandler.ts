import { HTTP_STATUS_CODES } from "@config/codes";
import { TYPES } from "@constants/types";
import { APP_TOKEN_LIFE, APP_TOKEN_SECRET } from "@constants/variables";
import { IAuthenticationHandler } from "@core/IAuthenticationHandler";
import { inject, injectable } from "inversify";
import { UserInterfaceError } from "@errors/UserInterfaceError";
import { AuthApplication } from "./AuthApplication";
import { Authentication } from "./Authentication";
import { JWTTokenUtil } from "./JWTTokenUtil";
import { AuthenticationRequest } from "./requests/AuthenticationRequest";

const PAYLOAD_KEY = 'user';

@injectable()
export class JWTAuthenticationHandler implements IAuthenticationHandler {
    constructor(
        @inject(TYPES.JWTToken)
        private readonly jwtTokenUtil: JWTTokenUtil,
        @inject(TYPES.AuthApplication)
        private readonly authApplication: AuthApplication,
    ) { }

    async authenticate(request: AuthenticationRequest) {
        const user = await this.authApplication.verifyCredentials(request);        
        if (!user) {
            throw new UserInterfaceError(
                HTTP_STATUS_CODES.UNAUTHORIZED,
            );
        }

        return new Authentication(
            this.jwtTokenUtil.generateToken(
                user.userId,
                APP_TOKEN_SECRET,
                APP_TOKEN_LIFE,
                PAYLOAD_KEY,
            ),
        );
    }
}