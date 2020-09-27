import { createSelector } from 'reselect';

const authSelector = state => state.auth;

const getInitURL = () => createSelector(
    authSelector,
    auth => auth.initURL
)

const getAuthToken = () => createSelector(
    authSelector,
    auth => auth.token
)

const isRememberMe = () => createSelector(
    authSelector,
    auth => auth.rememberMe
)

export const AuthSelector = {
    getInitURL,
    getAuthToken,
    isRememberMe,
};
