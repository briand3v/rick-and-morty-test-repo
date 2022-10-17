import { TYPES } from "@constants/types";
import { IDataMapper } from "@core/infrastructure/IDataMapper";
import { UserDTO } from "@domain/user/dtos/UserDTO";
import { IUserRepository } from "@domain/user/IUserRepository";
import { User } from "@domain/user/User";
import { inject, injectable } from "inversify";

@injectable()
export class UserApplication {
    constructor(
        @inject(TYPES.AuthRepository)
        private readonly userRepository: IUserRepository,
        @inject(TYPES.UserDataMapper)
        private readonly userMapper: IDataMapper<User>,
    ) { }

    async getUser(id: string): Promise<UserDTO | null> {
        const user = await this.userRepository.findUser(id);
        if (!user) return null;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.userMapper.toDTO(user);
    }
}