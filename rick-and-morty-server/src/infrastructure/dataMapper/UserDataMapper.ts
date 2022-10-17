import { IDataMapper } from "@core/infrastructure/IDataMapper";
import { UserDTO } from "@domain/user/dtos/UserDTO";
import { User } from "@domain/user/User";
import { UserPassword } from "@domain/user/UserPassword";
import { injectable } from "inversify";

@injectable()
export class UserDataMapper implements IDataMapper<User> {
    toDTO (user: User): UserDTO {
        return {
            id: user.id.toString(),
            username: user.userName,
            email: user.email,
        };
    }

    toDomain(raw: any) {
        const {
            _id,
            userName,
            email,
            password,
        } = raw;
        const passwordObject = UserPassword.create({ value: password, hashed: true });
        return User.create({ userName, email, password: passwordObject }, _id);
    }

    async toDalEntity(userEntity: User): Promise<any> {
        let password: any = null;
        if (!!userEntity.password === true) {
            if (userEntity.password?.isAlreadyHashed()) {
                password = userEntity.password.value;
            } else {
                password = await userEntity.password?.getHashedValue();
            }
        }
        return {
            username: userEntity.userName,
            email: userEntity.email,
            password: password,
        };
    }
}