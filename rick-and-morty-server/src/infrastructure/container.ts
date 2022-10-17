import { AsyncContainerModule, interfaces } from "inversify";
import config from '@config/main';
import { createMongodbConnection } from "./db/mongodb";
import { Db } from "mongodb";
import { TYPES } from "@constants/types";
import { IDataMapper, IHttpMapper } from "@core/infrastructure/IDataMapper";
import { User } from "@domain/user/User";
import { UserDataMapper } from "./dataMapper/UserDataMapper";
import { IUserRepository } from "@domain/user/IUserRepository";
import { UserRepository } from "./repositories/UserRepository";
import { ICharacterRepository } from "@domain/character/ICharacterRepository";
import { CharacterRepository } from "./repositories/CharacterRepository";
import { Character } from "@domain/character/Character";
import { CharacterDataMapper } from "./dataMapper/CharacterDataMapper";

export const infrastructureContainerModule = new AsyncContainerModule(async (bind: interfaces.Bind) => {
    const db = await createMongodbConnection(config.MONGODB_URI);
    bind<Db>(TYPES.DB).toConstantValue(db);
    bind<IDataMapper<User>>(TYPES.UserDataMapper).to(UserDataMapper);
    bind<IUserRepository>(TYPES.AuthRepository).to(UserRepository);
    bind<ICharacterRepository>(TYPES.CharacterRepository).to(CharacterRepository);
    bind<IHttpMapper<Character>>(TYPES.CharacterDataMapper).to(CharacterDataMapper);
});
