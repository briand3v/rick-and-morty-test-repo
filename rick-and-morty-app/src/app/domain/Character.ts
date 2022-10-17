class OriginCharacter {
    name: string
    constructor(
        name: string,
    ) {
        this.name = name
    }
}

class LocationCharacter {
    name: string
    constructor(
        name: string
    ) {
        this.name = name
    }
}

interface ICharacterProps {
    id: string | number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: OriginCharacter
    location: LocationCharacter
    image: string
    episode: string[]
    url: string
}

export class Character {
    id: string | number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: OriginCharacter
    location: LocationCharacter
    image: string
    episode: string[]
    url: string


    constructor({
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
        url
    }: ICharacterProps) {
        this.id = id
        this.name = name
        this.status = status
        this.species = species
        this.type = type
        this.gender = gender
        this.origin = origin
        this.location = location
        this.image = image
        this.episode = episode
        this.url = url
    }

    get cardId(): string | number {
        return this.id.toString();
    }
}
