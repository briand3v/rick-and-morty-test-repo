import { inject } from 'inversify';
import {
    BaseHttpController,
    controller,
    httpGet,
    results,
} from 'inversify-express-utils';
import { TYPES } from '@constants/types';
import { CharacterApplication } from '@application/character/CharacterApplication';

@controller('/api/v1/rickandmorty')
export class CharacterController extends BaseHttpController {
    constructor(
        @inject(TYPES.CharacterApplication)
        private readonly service: CharacterApplication,
    ) { super(); }

    @httpGet('/allCharacters')
    public async create(): Promise<results.JsonResult> {
        const characters = await this.service.getAllCharacters();
        return this.json(characters);
    }
}