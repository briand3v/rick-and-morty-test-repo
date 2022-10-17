import { inject } from 'inversify';
import {
    BaseHttpController,
    controller,
    httpGet,
    results,
    requestParam,
    response,
} from 'inversify-express-utils';
import { TYPES } from '@constants/types';
import { UserApplication } from '@application/user/UserApplication';
import { Response } from 'express';
import { DeserializeUserMiddleware } from '../middlewares/deserializeUserMiddleware';

@controller('/api/v1/user')
export class UserController extends BaseHttpController {
    constructor(
        @inject(TYPES.UserApplication)
        private readonly service: UserApplication,
    ) { super(); }

    @httpGet('/me', DeserializeUserMiddleware)
    public async getMe(
        @response() res: Response,
    ) {
        const user = await res.locals.user;
        return this.json(user);
    }

    @httpGet('/:id')
    public async getUser(
        @requestParam() params: any,
    ): Promise<results.JsonResult> {
        const user = await this.service.getUser(params.id);
        return this.json(user);
    }
}