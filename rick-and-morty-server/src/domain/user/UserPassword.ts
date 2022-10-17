import { ValueObject } from "@core/domain/ValueObject";
import bcrypt from 'bcrypt';

export interface IUserPasswordProps {
    value: string;
    hashed?: boolean;
}

export class UserPassword extends ValueObject<IUserPasswordProps>{

    private constructor(props: IUserPasswordProps) {
        super(props);
    }

    get value(): string {
        return this.props.value;
    }

    public isAlreadyHashed (): boolean {
        return this.props.hashed || false;
    }

    public async comparePassword (plainTextPassword: string): Promise<boolean> {
        let hashed: string;
        if (this.isAlreadyHashed()) {
            hashed = this.props.value;
            return this.bcryptCompare(plainTextPassword, hashed);
        } else {
            return this.props.value === plainTextPassword;
        }
    }

    private bcryptCompare (plainText: string, hashed: string): Promise<boolean> {
        return new Promise((resolve) => {
            bcrypt.compare(plainText, hashed, (err: any, compareResult: any) => {
                if (err) return resolve(false);
                return resolve(compareResult);
            });
        });
    }

    private hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err: any, hash: string) => {
                if (err) return reject(err);
                resolve(hash);
            });
        });
    }

    public getHashedValue (): Promise<string> {
        return new Promise((resolve) => {
            if (this.isAlreadyHashed()) {
                return resolve(this.props.value);
            } else {
                return resolve(this.hashPassword(this.props.value));
            }
        });
    }

    public static create(props: IUserPasswordProps) {
        return new UserPassword(
            {
                value: props.value,
                hashed: !!props.hashed === true,
            },
        );
    }
}