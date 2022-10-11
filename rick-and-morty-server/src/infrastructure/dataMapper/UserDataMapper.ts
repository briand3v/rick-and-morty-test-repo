import { IDataMapper } from "@core/IDataMapper";
import { User } from "@domain/user/User";
import { injectable } from "inversify";

@injectable()
export class UserDataMapper implements IDataMapper<User> {
    toDomain(user: any) {
        const {
            guid,
            userName,
            email,
        } = user;
        return User.create({ userName, email }, guid);
    }

    toDalEntity(userEntity: User) {
        return {
            guid: userEntity.guid,
            userName: userEntity.userName,
            email: userEntity.email,
            password: userEntity.password,
        };
    }
}