import { BaseError } from "./BaseError";


export class UserInterfaceError extends BaseError {
    constructor(
        public readonly status: number,
        public readonly code?: string,
        public readonly message: string = '',
        public readonly name: string = '',
    ) {
        super(code, message, name);
    }
}
