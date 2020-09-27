import { takeLatest, call, put } from 'redux-saga/effects'
import { AuthAction, CommonAction } from 'actions';
import { AuthConstant } from '../constants/';
import { AuthService } from 'services';
import _ from 'lodash';


//***********************************************//
const signInFlow = async (payload) =>
    await AuthService.signIn(payload).then(result => result);

function* signIn({type, payload}) {
    try {
        yield put(CommonAction.startLoader(type))
        const data = yield call(signInFlow, payload);
        if (data) {
            localStorage.setItem('token', data["access"]);
            localStorage.setItem('refreshToken', data["refresh"]);
            yield put(AuthAction.signInSuccess(data))
        } else {
            let msg = 'Something went wrong. Please try later.';
            yield put(CommonAction.showMessage(msg, 'error'))
        }
    } catch (error) {
        if (error === "Error: Network Error") {
            yield put(CommonAction.showMessage("Network Error, Please try later.", 'error'))
        } else if (error.response) {
            yield put(CommonAction.showMessage(error.response.data.detail, 'error'));
        }
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

const revokeRefreshTokenFlow = async (payload) =>
    await AuthService.revokeRefreshToken(payload).then(result => result);

function* signOut({type}) {
    try {
        yield put(CommonAction.startLoader(type));
        const refreshToken = localStorage.getItem('refreshToken');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        yield put(AuthAction.signOutSuccess());
        if (refreshToken) {
            yield call(revokeRefreshTokenFlow, refreshToken);
        }
    } catch (error) {
        if (error.response) yield put(CommonAction.showMessage(error.response.data.error, 'error'));
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

export function* AuthWatcher() {
    yield takeLatest(AuthConstant.SIGN_IN, signIn);
    yield takeLatest(AuthConstant.SIGN_OUT, signOut);
}
//***********************************************//

const getTokenSilentlyFlow = async (payload) =>
    await AuthService.getTokenSilently(payload).then(result => result);

function* getTokenSilently({type}) {
    try {
        yield put(CommonAction.startLoader(type))
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
            const data = yield call(getTokenSilentlyFlow, refreshToken);
            if (data['refreshToken']['success']) {
                localStorage.setItem('token', data['refreshToken']["token"]);
                yield put(AuthAction.getTokenSilentlySuccess(data['refreshToken']));
            } else {
                const errors = data['refreshToken']['errors']['nonFieldErrors'];
                let msg = '';
                if (errors) {
                    msg = _.map(errors, 'message').join(" ");
                } else {
                    msg = 'Something went wrong. Please try later.';
                }
                yield put(CommonAction.showMessage(msg, 'error'))
            }
        }
    } catch (error) {
        if (error.response) yield put(CommonAction.showMessage(error.response.data.error, 'error'));
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

export function* RefreshTokenWatcher() {
    yield takeLatest(AuthConstant.GET_TOKEN_SILENTLY, getTokenSilently);
}
