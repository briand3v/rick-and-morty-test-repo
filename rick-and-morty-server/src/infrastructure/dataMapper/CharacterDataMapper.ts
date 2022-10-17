import { IHttpMapper } from "@core/infrastructure/IDataMapper";
import { Character } from "@domain/character/Character";
import { CharacterLocation } from "@domain/character/CharacterLocation";
import { CharacterOrigen } from "@domain/character/CharacterOrigen";
import { CharacterDTO } from "@domain/character/dtos/characterDTO";
import { injectable } from "inversify";

@injectable()
export class CharacterDataMapper implements IHttpMapper<Character> {
    toDTO(character: Character): CharacterDTO {
        return {
            id: character.characterId,
            name: character.name,
            status: character.status,
            species: character.species,
            type: character.type,
            gender: character.gender,
            origin: {
                name: character.origin.name,
            },
            location: {
                name: character.location.name,
            },
            image: character.image,
            episode: character.episode,
            url: character.url,
        };
    }
    
    toDomain(raw: any): Character {
        const {
            id,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            image,
            episode,
            url,
        } = raw;
        
        const originValueObject = CharacterOrigen.create({ name: origin.name });
        const locationValueObject = CharacterLocation.create({ name: location.name });
        return Character.create({
            name,
            status,
            species,
            type,
            gender,
            origin: originValueObject,
            location: locationValueObject,
            image,
            episode,
            url,
        }, id);
    }
}