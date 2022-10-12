
import { ObjectId } from 'mongodb';
import { Identifier } from './identifier';

export class UniqueEntityID extends Identifier<string | number | ObjectId>{
    constructor(id?: string | number) {
        super(id ? id : new ObjectId());
    }
}