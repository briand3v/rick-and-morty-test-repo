import { TYPES } from "@constants/types";
import { IHttpMapper } from "@core/infrastructure/IDataMapper";
import { Character } from "@domain/character/Character";
import { CharacterDTO } from "@domain/character/dtos/characterDTO";
import { ICharacterRepository } from "@domain/character/ICharacterRepository";
import { inject } from "inversify";
import { HttpService } from "../services/http/HttpService";

export class CharacterRepository extends HttpService
    implements ICharacterRepository {
    constructor(
        @inject(TYPES.CharacterDataMapper) private readonly characterDataMapper: IHttpMapper<Character>,
    ) {
        super('https://rickandmortyapi.com/api');
    }
    
    async getAllCharacters(): Promise<CharacterDTO[]> {
        const response = await this.get({ url: '/character' });
        const characters: Character[] = response.data.results
            .map((character: any) => this.characterDataMapper.toDomain(character));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const dto: CharacterDTO[] = characters
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            .map((characterDomain: Character) => this.characterDataMapper.toDTO(characterDomain));
        return dto;
    }
}
