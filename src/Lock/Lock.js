import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from '../Auth/auth0-variables';

export default class Lock {
    auth0Lock = new Auth0Lock(
        AUTH_CONFIG.clientId,
        AUTH_CONFIG.domain,
        {
            auth: {
                redirectUrl: "http://localhost:3000/callback",
                responseType: "token id_token",
                autoParseHash: true
            },
            theme: {
                logo: 'http://localhost:3000/ctm.png',
                primaryColor: '#0db14b'
            },
            hashCleanup: false,
            container: 'lock-form'
        }
    );

    login = () => {
        this.auth0Lock.show();
    }
}