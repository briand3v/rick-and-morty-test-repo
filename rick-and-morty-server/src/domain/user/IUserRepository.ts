import { IRepository } from '@core/IRepository';
import { AddUserRepositoryRequest } from './AddUserRepositoryRequest';
import { User } from './User';

export interface IUserRepository extends IRepository<User> {
    addUser(request: AddUserRepositoryRequest): Promise<User>;
    findUserByEmail(request: any): Promise<User | null>;
}