export default {
    API_PORT: process.env.API_PORT || '3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/rickandmorty',
    DB_NAME: process.env.DB_NAME || 'rickandmorty',
    // accessTokenExpiresIn
    ACCESS_TOKEN_EXPIRES_IN: 15,
    REFRESH_TOKEN_EXPIRE_IN: 59,
    
    accessTokenPrivateKey: 'ACCESS_TOKEN_PRIVATE_KEY',
    accessTokenPublicKey: 'ACCESS_TOKEN_PUBLIC_KEY',
    refreshTokenPrivateKey: 'REFRESH_TOKEN_PRIVATE_KEY',
    refreshTokenPublicKey: 'REFRESH_TOKEN_PUBLIC_KEY',
};