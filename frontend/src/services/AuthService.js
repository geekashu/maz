import {authInstance} from "containers/App";

export const AuthService = {
    signIn,
    getTokenSilently,
    revokeRefreshToken,
};

function signIn(params) {
    return authInstance.post('/api/auth/jwt/create/', params)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response);
            }
            return response.data;
        });
}


function getTokenSilently(refreshToken) {
    const REFRESH_TOKEN =
        `mutation {
            refreshToken(refreshToken: "${refreshToken}") {
                success,
                errors,
                token,
            }
        }`

    return authInstance.post('/graphql', {query: REFRESH_TOKEN})
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response);
            }
            return response.data.data;
        });
}

function revokeRefreshToken(refreshToken) {
    const REVOKE_REFRESH_TOKEN =
        `mutation {
            revokeToken(refreshToken: "${refreshToken}") {
                revoked
            }
        }`

    return authInstance.post('/graphql', {query: REVOKE_REFRESH_TOKEN})
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response);
            }
            return response.data.data;
        });
}
