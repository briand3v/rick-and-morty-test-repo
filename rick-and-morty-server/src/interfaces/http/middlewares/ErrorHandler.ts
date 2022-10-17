import { NextFunction, Request, Response } from 'express';
import { BaseError } from '@errors/BaseError';
import { ErrorResponse } from '@errors/errorResponse';
import { UserInterfaceError } from '@errors/UserInterfaceError';

export const errorHandler = (error: BaseError, req: Request, res: Response, next: NextFunction) => {
    next();
    return res.status((error as UserInterfaceError).status || 500).json(new ErrorResponse(error.code, error.message));
};
