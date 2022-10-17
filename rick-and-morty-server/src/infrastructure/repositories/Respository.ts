import DataModel from '@core/infrastructure/DataModel';
import { IDataMapper } from '@core/infrastructure/IDataMapper';
import { IRepository } from '@core/infrastructure/IRepository';
import { unmanaged, injectable } from 'inversify';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { Query } from './Query';
import ValidationError from '@core/ValidationError';

@injectable()
export class Repository<TDataModel extends DataModel, TDomainModel>
implements IRepository<TDomainModel> {
    private readonly collectionInstance: Model<TDataModel>;
    private readonly dataMapper: IDataMapper<TDomainModel>;

    constructor(
        @unmanaged() collectionInstance: Model<TDataModel>,
        @unmanaged() dataMapper: IDataMapper<TDomainModel>,
    ) {
        this.collectionInstance = collectionInstance;
        this.dataMapper = dataMapper;
    }

    async findOne(query: Query<any>): Promise<TDomainModel | null> {
        const dbResult = await this.collectionInstance.findOne(query);
        if (!dbResult) return null;
        return this.dataMapper.toDomain(dbResult);
    }

    async findOneById(guid: string): Promise<TDomainModel | null> {
        const dbResult = await this.collectionInstance.findOne({ _id: new ObjectId(guid) });
        if (!dbResult) return null;
        return this.dataMapper.toDomain(dbResult);
    }

    async doesExists(guid: string): Promise<boolean> {
        const dbResult = await this.collectionInstance.findOne({ _id: new ObjectId(guid) });
        return !!dbResult;
    }

    async save(entity: TDomainModel): Promise<TDomainModel> {
        const guid: string = (entity as any)._id.toString();
        const exists = await this.doesExists(guid);
        const toPersistence = await this.dataMapper.toDalEntity(entity);
        if (exists) {
            throw new ValidationError('ID ' + guid + ' already exists.');
        }
        return this.dataMapper.toDomain(await this.collectionInstance.create(toPersistence));
    }

    async delete(id: string): Promise<void> {
        await this.collectionInstance.deleteOne({ _id: new ObjectId(id) });
    }
}
