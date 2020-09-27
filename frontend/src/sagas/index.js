import {AuthWatcher, RefreshTokenWatcher} from "./AuthSaga";
import {CalendarWatcher} from "./CalendarSaga";
import {all, fork} from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        AuthWatcher,
        RefreshTokenWatcher,
        CalendarWatcher,
    ].map(fork));
}