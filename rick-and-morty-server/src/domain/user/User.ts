import { Entity } from "@core/Entity";
import { IAggregateRoot } from "@core/IAggregateRoot";

export interface IUserProps {
    userName: string;
    email: string;
    password?: string;
}

export class User extends Entity<IUserProps> implements IAggregateRoot {
    private _userName: string;
    private _email: string;
    private _password: string | null;

    constructor({
        userName,
        email,
        password,
    }: IUserProps, guid?: string) {
        super(guid);
        this._userName = userName;
        this._email = email;
        this._password = password || null;
    }

    get userName(): string {
        return this._userName;
    }

    get email(): string {
        return this._email;
    }

    get password(): string | null {
        return this._password;
    }

    public static create(props: IUserProps, id?: string) {
        return new User(props, id);
    }
}