export class JWTAccessTokenRequest {
    constructor(
        public readonly token: string,
        public readonly key: string,
    ) { }
}
