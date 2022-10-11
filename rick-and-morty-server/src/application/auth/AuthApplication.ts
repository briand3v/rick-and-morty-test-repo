import { TYPES } from "@constants/types";
import { AddUserRepositoryRequest } from "@domain/user/AddUserRepositoryRequest";
import { IUserRepository } from "@domain/user/IUserRepository";
import { User } from "@domain/user/User";
import { compare } from "bcrypt";
import { inject, injectable } from "inversify";
import { SignUpRequest } from "src/interfaces/http/controllers/requests/SignUpRequest";
import { AuthRequest } from "./requests/AuthRequest";

@injectable()
export class AuthApplication {
    constructor(
        @inject(TYPES.AuthRepository)
        private readonly userRepository: IUserRepository,
    ) { }

    async register(
        {
            userName,
            email,
            password,
        }: SignUpRequest): Promise<User | void> {
        return this.userRepository.addUser(
            new AddUserRepositoryRequest(
                userName,
                email,
                password,
            ),
        );
    }

    async verifyCredentials({ email, password }: AuthRequest) {
        const user = await this.userRepository.findUserByEmail({ email: email });

        if (!user || !(await compare(password, user?.password || ''))) {
            return undefined;
        }
        return user;
    }
}