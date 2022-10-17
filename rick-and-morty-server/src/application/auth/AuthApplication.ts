import { HTTP_STATUS_CODES } from "@config/codes";
import { TYPES } from "@constants/types";
import { IDataMapper } from "@core/infrastructure/IDataMapper";
import { AddUserRepositoryRequest } from "@domain/user/AddUserRepositoryRequest";
import { UserDTO } from "@domain/user/dtos/UserDTO";
import { IUserRepository } from "@domain/user/IUserRepository";
import { User } from "@domain/user/User";
import { inject, injectable } from "inversify";
import { UserInterfaceError } from "@errors/UserInterfaceError";
import { SignUpRequest } from "src/interfaces/http/controllers/requests/SignUpRequest";
import { AuthRequest } from "./requests/AuthRequest";

@injectable()
export class AuthApplication {
    constructor(
        @inject(TYPES.AuthRepository)
        private readonly userRepository: IUserRepository,
        @inject(TYPES.UserDataMapper)
        private readonly userDataMapper: IDataMapper<User>,
    ) { }

    async register(
        {
            userName,
            email,
            password,
        }: SignUpRequest): Promise<UserDTO | void> {
        const alreadyExist = await this.userRepository.findUserByEmail({ email: email });
        if (alreadyExist) {
            throw new UserInterfaceError(
                HTTP_STATUS_CODES.UNAUTHORIZED,
                HTTP_STATUS_CODES.UNAUTHORIZED.toString(),
                `User already exist with ${email}`,
            );
        };

        const user = await this.userRepository.addUser(
            new AddUserRepositoryRequest(
                userName,
                email,
                password,
            ),
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.userDataMapper.toDTO(user);
    }

    async verifyCredentials({ email, password }: AuthRequest): Promise<UserDTO> {
        const user = await this.userRepository.findUserByEmail({ email: email });
        if (!user) {
            throw new UserInterfaceError(
                HTTP_STATUS_CODES.UNAUTHORIZED,
                HTTP_STATUS_CODES.UNAUTHORIZED.toString(),
                'User does not exist',
            );
        }

        const passwordValid = await user?.password?.comparePassword(password);
        if (!user || !passwordValid) {
            throw new UserInterfaceError(
                HTTP_STATUS_CODES.UNAUTHORIZED,
                HTTP_STATUS_CODES.UNAUTHORIZED.toString(),
                'Password incorrect, Try again',
            );
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.userDataMapper.toDTO(user);
    }
}