import { UniqueEntityID } from './UniqueEntityID';

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
}

export abstract class Entity<TInitProps> {
    protected readonly _id: UniqueEntityID;
    protected props: TInitProps;

    constructor(props: TInitProps, id?: UniqueEntityID) {
        this._id = id ? id : new UniqueEntityID();
        this.props = props;
    }

    public equals(object?: Entity<TInitProps>): boolean {
        if (object === null || object === undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!isEntity(object)) {
            return false;
        }

        return this._id.equals(object._id);
    }
}