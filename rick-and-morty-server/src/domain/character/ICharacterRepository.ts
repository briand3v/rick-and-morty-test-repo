import { CharacterDTO } from './dtos/characterDTO';

export interface ICharacterRepository {
    getAllCharacters(): Promise<CharacterDTO[]>;
}