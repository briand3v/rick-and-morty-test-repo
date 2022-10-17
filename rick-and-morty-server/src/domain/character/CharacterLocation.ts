import { ValueObject } from "@core/domain/ValueObject";

export interface ICharacterLocationProps {
    name: string;
}

export class CharacterLocation extends ValueObject<ICharacterLocationProps>{

    private constructor(props: ICharacterLocationProps) {
        super(props);
    }

    get name(): string {
        return this.props.name;
    }

    public static create(props: ICharacterLocationProps) {
        return new CharacterLocation(
            {
                name: props.name,
            },
        );
    }
}