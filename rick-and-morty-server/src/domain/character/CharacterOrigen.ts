import { ValueObject } from "@core/domain/ValueObject";

export interface ICharacterOrigenProps {
    name: string;
}

export class CharacterOrigen extends ValueObject<ICharacterOrigenProps>{

    private constructor(props: ICharacterOrigenProps) {
        super(props);
    }

    get name(): string {
        return this.props.name;
    }

    public static create(props: ICharacterOrigenProps) {
        return new CharacterOrigen(
            {
                name: props.name,
            },
        );
    }
}