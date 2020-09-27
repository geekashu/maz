import {all, call, put, takeLatest} from "redux-saga/effects";
import {CalendarAction, CommonAction} from 'actions';
import {CalendarConstant} from "../constants";
import {CalendarService} from "services";
import {push} from "connected-react-router";

const getEventsFlow = async (payload) =>
    await CalendarService.getEvents(payload).then(result => result);
const createEventFlow = async (payload) =>
    await CalendarService.createEvent(payload).then(result => result);
const updateEventFlow = async (payload) =>
    await CalendarService.updateEvent(payload).then(result => result);
const deleteEventFlow = async (payload) =>
    await CalendarService.deleteEvent(payload).then(result => result);

function* getEvents({type, payload}) {
    try {
        yield put(CommonAction.startLoader(type));
        const data = yield call(getEventsFlow, payload);
        yield put(CalendarAction.getEventsSuccess(data));
    } catch (error){
        yield put(CommonAction.showMessage(error.response.data, 'error'));
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

function* createEvent({type, payload}) {
    try {
        yield put(CommonAction.startLoader(type));
        const data = yield call(createEventFlow, payload);
        yield put(CalendarAction.createEventSuccess(data));
        yield put(push(CalendarConstant.URL_CALENDAR));
    } catch (error){
        yield put(CommonAction.showMessage(error.response.data, 'error'));
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

function* updateEvent({type, payload}) {
    try {
        yield put(CommonAction.startLoader(type));
        const data = yield call(updateEventFlow, payload);
        yield put(CalendarAction.updateEventSuccess(data));
    } catch (error){
        yield put(CommonAction.showMessage(error.response.data, 'error'));
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

function* deleteEvent({type, payload}) {
    try {
        yield put(CommonAction.startLoader(type));
        yield call(deleteEventFlow, payload);
        // Output a message for successful deletion
        // yield put(CalendarAction.deleteEventSuccess());
    } catch (error){
        yield put(CommonAction.showMessage(error.response.data, 'error'));
    } finally {
        yield put(CommonAction.stopLoader(type))
    }
}

export function* CalendarWatcher() {
    yield all([
        takeLatest(CalendarConstant.GET_EVENTS, getEvents),
        takeLatest(CalendarConstant.CREATE_EVENT, createEvent),
        takeLatest(CalendarConstant.UPDATE_EVENT, updateEvent),
        takeLatest(CalendarConstant.DELETE_EVENT, deleteEvent),
    ]);
}



