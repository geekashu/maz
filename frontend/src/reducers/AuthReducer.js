import {AuthConstant} from "../constants";

const initialState = {
    initURL: '',
    token: localStorage.getItem('token'),
    rememberMe: false,
};

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case AuthConstant.INIT_URL: {
            return {
                ...state,
                initURL: action.payload,
            }
        }

        case AuthConstant.GET_TOKEN_SILENTLY_SUCCESS:
        case AuthConstant.SIGN_IN_SUCCESS: {
            return {
                ...state,
                token: action.payload.access,
            }
        }

        case AuthConstant.SIGN_OUT_SUCCESS: {
            return {
                ...state,
                token: null,
                initURL: ''
            }
        }

        default:
            return state;
    }
}

export default AuthReducer;
