interface OriginCharacter {
    name: string
}

interface LocationCharacter {
    name: string
}


export interface ICharacterProps {
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