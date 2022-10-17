import { TYPES } from "@constants/types";
import { IDataMapper } from "@core/infrastructure/IDataMapper";
import { AddUserRepositoryRequest } from "@domain/user/AddUserRepositoryRequest";
import { IUserRepository } from "@domain/user/IUserRepository";
import { User } from "@domain/user/User";
import { UserPassword } from "@domain/user/UserPassword";
import { inject } from "inversify";
import IUserDataModel from "../db/dataModel/IUserDataModel";
import UserSchema from "../db/schemas/UserSchema";
import { Repository } from "./Respository";

export class UserRepository extends Repository<IUserDataModel, User>
    implements IUserRepository {
    constructor(
        @inject(TYPES.UserDataMapper) private readonly userDataMapper: IDataMapper<User>,
    ) {
        super(UserSchema, userDataMapper);
    }

    async findUser(id: string): Promise<User | null> {
        const user = await this.findOneById(id);
        if (!user) return null;
        return user;
    }

    async findUserByEmail({
        email,
    }: any): Promise<User | null> {
        const user = await this.findOne({ email: email });
        if (!user) return null;
        return user;
    }

    async addUser({
        userName,
        email,
        password,
    }: AddUserRepositoryRequest): Promise<User> {
        const passwordValueObject = UserPassword.create({ value: password });
        const user = User.create({ userName, email, password: passwordValueObject });
        const savedUser: User = await this.save(user);
        return savedUser;
    }
}
