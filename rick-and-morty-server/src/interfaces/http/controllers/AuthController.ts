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

@controller('/api/v1/auth')
export class AuthController extends BaseHttpController {
    constructor(
        @inject(TYPES.AuthApplication)
        private readonly service: AuthApplication,
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
}