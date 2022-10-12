import { UniqueEntityID } from './UniqueEntityID';

export abstract class Entity<TInitProps> {
    protected readonly _id: UniqueEntityID;

    constructor(id?: UniqueEntityID) {
        this._id = id ? id : new UniqueEntityID();
    }
}