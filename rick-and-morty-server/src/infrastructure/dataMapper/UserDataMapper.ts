import { IDataMapper } from "@core/IDataMapper";
import { User } from "@domain/user/User";
import { UserPassword } from "@domain/user/UserPassword";
import { injectable } from "inversify";

@injectable()
export class UserDataMapper implements IDataMapper<User> {
    toDomain(user: any) {
        const {
            _id,
            userName,
            email,
            password,
        } = user;
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
            _id: userEntity.userIdObjectId.toValue(),
            userName: userEntity.userName,
            email: userEntity.email,
            password: password,
        };
    }
}