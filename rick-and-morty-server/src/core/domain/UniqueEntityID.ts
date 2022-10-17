
import { ObjectId } from 'mongodb';
import { Identifier } from '../infrastructure/identifier';

export class UniqueEntityID extends Identifier<string | ObjectId>{
    constructor(id?: string) {
        super(id ? id : new ObjectId());
    }
}