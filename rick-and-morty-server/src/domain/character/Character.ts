import { AggregateRoot } from "@core/domain/AgregateRoot";
import { UniqueEntityID } from "@core/domain/UniqueEntityID";
import { CharacterLocation } from "./CharacterLocation";
import { CharacterOrigen } from "./CharacterOrigen";

export interface ICharacterProps {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterOrigen;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
}

export class Character extends AggregateRoot<ICharacterProps> {
    constructor(props: ICharacterProps, id?: UniqueEntityID) {
        super(props, id);
    }

    get characterId(): string {
        return this._id.toString();
    }

    get name(): string {
        return this.props.name;
    }

    get status(): string {
        return this.props.status;
    }

    get species(): string {
        return this.props.species;
    }

    get type(): string {
        return this.props.type;
    }

    get gender(): string {
        return this.props.gender;
    }

    get origin(): CharacterOrigen {
        return this.props.origin;
    }

    get location(): CharacterLocation {
        return this.props.location;
    }

    get image(): string {
        return this.props.image;
    }

    get episode(): string[] {
        return this.props.episode;
    }

    get url(): string {
        return this.props.url;
    }

    public static create(props: ICharacterProps, id?: UniqueEntityID) {
        return new Character(props, id);
    }
}