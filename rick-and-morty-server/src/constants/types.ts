export const TYPES = {
    //db
    DB: Symbol('DB'),

    // mapper
    UserDataMapper: Symbol('UserDataMapper'),

    // application repositories
    AuthRepository: Symbol('AuthRepository'),

    // application services
    AuthApplication: Symbol('AuthApplication'),
    UserApplication: Symbol('UserApplication'),

    // handlers
    AuthenticationHandler: Symbol('AuthenticationHandler'),

    // JWT TOKEN
    JWTToken: Symbol('JWTToken'),
};
