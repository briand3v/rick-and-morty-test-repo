import { Authentication } from "@application/auth/Authentication";
import { JWTAccessTokenRequest } from "@application/auth/requests/JWTAccessTokenRequest";
import { AuthenticationRequestBody } from "src/interfaces/http/controllers/requests/AuthenticateRequestBody";


export interface IAuthenticationHandler {
    authenticate(request: AuthenticationRequestBody): Promise<Authentication>;
    verifyAccessToken(request: JWTAccessTokenRequest): Promise<any>;
}