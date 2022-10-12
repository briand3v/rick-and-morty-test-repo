import { Entity } from "@core/Entity";
import { IAggregateRoot } from "@core/IAggregateRoot";
import { UniqueEntityID } from "@core/UniqueEntityID";
import { UserPassword } from "./UserPassword";

export interface IUserProps {
    userName: string;
    email: string;
    password?: UserPassword | null;
}

export class User extends Entity<IUserProps> implements IAggregateRoot {
    private _userName: string;
    private _email: string;
    private _password: UserPassword | null;

    constructor({
        userName,
        email,
        password,
    }: IUserProps, id?: UniqueEntityID) {
        super(id);
        this._userName = userName;
        this._email = email;
        this._password = password || null;
    }

    get userIdObjectId() {
        return this._id;
    }

    get userId() {
        return this._id.toString();
    }

    get userName(): string {
        return this._userName;
    }

    get email(): string {
        return this._email;
    }

    get password(): UserPassword | null {
        return this._password;
    }

    public static create(props: IUserProps, id?: UniqueEntityID) {
        return new User(props, id);
    }
}