import { Response } from 'express';

export const errorHandler = (err: any, res: Response) => {
    console.log(`[X] ERROR ${err.message}`);
    return res.status(err.httpStatusCode || 500).json({
        status: err.statusCode || '500',
        message: err.message,
    });
}