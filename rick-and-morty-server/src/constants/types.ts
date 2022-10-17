export const TYPES = {
    //db
    DB: Symbol('DB'),

    // mapper
    UserDataMapper: Symbol('UserDataMapper'),
    CharacterDataMapper: Symbol('CharacterDataMapper'),

    // application repositories
    AuthRepository: Symbol('AuthRepository'),
    CharacterRepository: Symbol('CharacterRepository'),

    // application services
    AuthApplication: Symbol('AuthApplication'),
    UserApplication: Symbol('UserApplication'),
    CharacterApplication: Symbol('CharacterApplication'),
    HttpService: Symbol('HttpService'),

    // middleware
    DeserializeUserMiddleware: Symbol('DeserializeUserMiddleware'),

    // handlers
    AuthenticationHandler: Symbol('AuthenticationHandler'),

    // JWT TOKEN
    JWTToken: Symbol('JWTToken'),
};
