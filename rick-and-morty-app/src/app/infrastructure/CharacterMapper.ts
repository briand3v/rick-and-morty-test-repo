import { Character } from "../domain/Character";

export const CharacterMapper = {
    toDomain: (data: any) =>
        new Character({
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type,
            gender: data.gender,
            origin: data.origin,
            location: data.location,
            image: data.image,
            episode: data.episode,
            url: data.url
        }),
};
