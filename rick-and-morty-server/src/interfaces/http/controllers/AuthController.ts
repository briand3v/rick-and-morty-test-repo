import { inject } from 'inversify';
import {
    BaseHttpController,
    controller,
    httpPost,
    requestBody,
    results,
} from 'inversify-express-utils';
import { AuthApplication } from '@application/auth/AuthApplication';
import { TYPES } from '@constants/types';
import { SignUpRequestBody } from './requests/SignUpRequestBody';
import { SignUpRequest } from './requests/SignUpRequest';
import { AuthenticationRequestBody } from './requests/AuthenticateRequestBody';
import { IAuthenticationHandler } from '@core/IAuthenticationHandler';
import { AuthRequest } from '@application/auth/requests/AuthRequest';

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
            { userName, email, password }: SignUpRequestBody,
    ): Promise<results.JsonResult> {
        const user = await this.service.register(
            new SignUpRequest(userName, email, password),
        );
        return this.json(user);
    }

    @httpPost('/login')
    public async signIn(
        @requestBody() { email, password }: AuthenticationRequestBody,
    ): Promise<results.JsonResult> {
        const authenticate = await this.authHandler.authenticate(
            new AuthRequest(email, password),
        );
        return this.json(authenticate.token);
    }
    
}