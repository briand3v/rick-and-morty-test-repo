import { IDataMapper } from '@core/IDataMapper';
import { IRepository } from '@core/IRepository';
import { unmanaged, injectable } from 'inversify';
import { Collection } from 'mongodb';
import { Query } from './Query';

@injectable()
export class Repository<TDomainEntity>
    implements IRepository<TDomainEntity> {
    private readonly collectionInstance: Collection;
    private readonly dataMapper: IDataMapper<TDomainEntity>;

    constructor(
        @unmanaged() collectionInstance: Collection,
        @unmanaged() dataMapper: IDataMapper<TDomainEntity>,
    ) {
        this.collectionInstance = collectionInstance;
        this.dataMapper = dataMapper;
    }

    async findOne(query: Query<any>): Promise<TDomainEntity | null> {
        const dbResult = await this.collectionInstance.findOne(query);
        if (!dbResult) return null;
        return this.dataMapper.toDomain(dbResult);
    }

    async findOneById(guid: string): Promise<TDomainEntity | null> {
        const dbResult = await this.collectionInstance.findOne({ guid });
        if (!dbResult) return null;
        return this.dataMapper.toDomain(dbResult);
    }

    async doesExists(guid: string): Promise<boolean> {
        const dbResult = await this.collectionInstance.findOne({ _id: guid });
        return !!dbResult;
    }

    async save(entity: TDomainEntity): Promise<any> {
        const guid = (entity as any)._id.toString();
        const exists = await this.doesExists(guid);
        const toPersistence = await this.dataMapper.toDalEntity(entity);
        if (!exists) {
            return await this.collectionInstance.insertOne(toPersistence);
        }
        return await this.collectionInstance.replaceOne({ _id: guid }, toPersistence);
    }

    async delete(id: string): Promise<void> {
        await this.collectionInstance.deleteOne({ guid: id });
    }
}
