export class AuthRequest {
    constructor(
        public readonly email: string,
        public readonly password: string,
    ) { }
}