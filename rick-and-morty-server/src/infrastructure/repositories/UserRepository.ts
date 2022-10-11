import { TYPES } from "@constants/types";
import { IDataMapper } from "@core/IDataMapper";
import { AddUserRepositoryRequest } from "@domain/user/AddUserRepositoryRequest";
import { IUserRepository } from "@domain/user/IUserRepository";
import { User } from "@domain/user/User";
import { inject } from "inversify";
import { Db } from "mongodb";
import { Repository } from "./Respository";

export class UserRepository extends Repository<User>
    implements IUserRepository {
    constructor(
        @inject(TYPES.DB) private readonly db: Db,
        @inject(TYPES.UserDataMapper) private readonly userDataMapper: IDataMapper<User>,
    ) {
        super(db.collection('users'), userDataMapper);
    }

    async findUserByEmail({
        email,
    }: any): Promise<User | null> {
        const result = await this.findOne({ email: email });
        return result;
    }

    async addUser({
        userName,
        email,
        password,
    }: AddUserRepositoryRequest): Promise<User> {
        const user = User.create({ userName, email, password });
        const savedUser = await this.save(user);
        return savedUser;
    }
}
