export interface IUser {
    username: string;
    email: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface IGenericResponse {
    status: string;
    message: string;
}