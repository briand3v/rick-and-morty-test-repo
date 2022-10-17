export interface IDataMapper<TDomainEntity> {
    toDTO(entity: TDomainEntity): any;
    toDomain(raw: any): TDomainEntity;
    toDalEntity(entity: TDomainEntity): any;
}

export interface IHttpMapper<TDomainEntity> {
    toDTO(entity: TDomainEntity): any;
    toDomain(dalEntity: any): TDomainEntity;
}
