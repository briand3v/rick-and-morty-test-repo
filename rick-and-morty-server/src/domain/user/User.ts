import { AggregateRoot } from "@core/domain/AgregateRoot";
import { UniqueEntityID } from "@core/domain/UniqueEntityID";
import { UserPassword } from "./UserPassword";

export interface IUserProps {
    userName: string;
    email: string;
    password: UserPassword;
}

export class User extends AggregateRoot<IUserProps> {

    constructor(props: IUserProps, id?: UniqueEntityID) {
        super(props, id);
    }

    get userIdObjectId() {
        return this._id;
    }

    get userId() {
        return this._id.toString();
    }

    get userName(): string {
        return this.props.userName;
    }

    get email(): string {
        return this.props.email;
    }

    get password(): UserPassword {
        return this.props.password;
    }

    public static create(props: IUserProps, id?: UniqueEntityID) {
        return new User(props, id);
    }
}