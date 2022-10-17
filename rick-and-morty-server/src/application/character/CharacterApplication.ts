import { TYPES } from "@constants/types";
import { CharacterDTO } from "@domain/character/dtos/characterDTO";
import { ICharacterRepository } from "@domain/character/ICharacterRepository";
import { inject, injectable } from "inversify";

@injectable()
export class CharacterApplication {
    constructor(
        @inject(TYPES.CharacterRepository)
        private readonly characterRepository: ICharacterRepository,
    ) { }

    async getAllCharacters(): Promise<CharacterDTO[]> {
        return await this.characterRepository.getAllCharacters();
    }
}