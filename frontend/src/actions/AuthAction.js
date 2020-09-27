import { AuthConstant } from "../constants";

const setInitUrl = (url) => {
    return {
        type: AuthConstant.INIT_URL,
        payload: url
    }
};

const signIn = (payload) => {
    return {
        type: AuthConstant.SIGN_IN,
        payload: payload
    }
}

const signInSuccess = (payload) => {
    return {
        type: AuthConstant.SIGN_IN_SUCCESS,
        payload: payload
    }
}

const signOut = () => {
    return {
        type: AuthConstant.SIGN_OUT,
    }
}

const signOutSuccess = () => {
    return {
        type: AuthConstant.SIGN_OUT_SUCCESS,
    }
}

const getTokenSilently = () => {
   return {
       type: AuthConstant.GET_TOKEN_SILENTLY
   }
}

const getTokenSilentlySuccess = (result) => {
    return {
        type: AuthConstant.GET_TOKEN_SILENTLY_SUCCESS,
        payload: result
    }
}


export const AuthAction = {
    setInitUrl,
    signIn,
    signInSuccess,
    signOut,
    signOutSuccess,
    getTokenSilently,
    getTokenSilentlySuccess,
};
