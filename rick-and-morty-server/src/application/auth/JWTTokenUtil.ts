import { IncomingHttpHeaders } from 'http';
import jwt, { Secret } from 'jsonwebtoken';
import { injectable } from 'inversify';

@injectable()
export class JWTTokenUtil {
    private readonly AUTH_HEADER = 'authorization';

    private readonly SCHEME = 'bearer';

    private readonly MATCHER = /(\S+)\s+(\S+)/;

    generateToken(
        payload: any,
        secret: any,
        expiresIn: string | number,
        payloadKey?: string,
    ): string {
        const privateKey = this.generatePrivateKey(secret);
        return jwt.sign(payloadKey ? { [payloadKey]: payload } : payload, privateKey, {
            expiresIn: expiresIn,
            algorithm: 'HS384',
        });
    }

    generatePrivateKey(secret: any) {
        return Buffer.from(secret, 'base64').toString('ascii');
    }

    decodeToken<R extends object | string | null>(token: string, secretKey: string): R {
        try {
            const publicKey = this.generatePrivateKey(secretKey);
            const jwtoken = jwt.verify(token, publicKey) as R;
            return jwtoken;
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        } catch(err) {
            return null as R;
        }
    }

    getTokenFromHeaders(headers: IncomingHttpHeaders): string | null {
        const authHeader = headers[this.AUTH_HEADER];
        if (!authHeader) {
            return null;
        }
        const matches = authHeader.match(this.MATCHER);

        return matches && matches[2];
    }
}
