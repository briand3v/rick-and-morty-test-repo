import { Authentication } from "@application/auth/Authentication";
import { AuthenticationRequestBody } from "src/interfaces/http/controllers/requests/AuthenticateRequestBody";


export interface IAuthenticationHandler {
    authenticate(request: AuthenticationRequestBody): Promise<Authentication>;
}