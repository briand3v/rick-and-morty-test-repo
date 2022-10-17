export interface IRepository<T> {
    findOneById(id: string): Promise<T | null>
    save(entity: T): Promise<T>;
    delete(id: string): Promise<void>;
}