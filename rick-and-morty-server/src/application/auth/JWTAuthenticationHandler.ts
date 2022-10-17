import { TYPES } from "@constants/types";
import { 
    APP_REFRESH_TOKEN_LIFE,
    APP_TOKEN_LIFE,
} from "@constants/variables";
import config from '@config/main';
import { IAuthenticationHandler } from "@core/IAuthenticationHandler";
import { inject, injectable } from "inversify";
import { AuthApplication } from "./AuthApplication";
import { Authentication } from "./Authentication";
import { JWTTokenUtil } from "./JWTTokenUtil";
import { AuthenticationRequest } from "./requests/AuthenticationRequest";
import { JWTAccessTokenRequest } from "./requests/JWTAccessTokenRequest";

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
        return new Authentication(
            this.jwtTokenUtil.generateToken(
                user.id,
                config.accessTokenPrivateKey,
                APP_TOKEN_LIFE,
                PAYLOAD_KEY,
            ),
            this.jwtTokenUtil.generateToken(
                user.id,
                config.refreshTokenPrivateKey,
                APP_REFRESH_TOKEN_LIFE,
                PAYLOAD_KEY,
            ),
        );
    }

    async verifyAccessToken(request: JWTAccessTokenRequest) {
        return new Promise((resolve, reject) => {
            const token = this.jwtTokenUtil.decodeToken(request.token, request.key);
            if (!token) reject(null);
            resolve(token);
        })
    }
}