import {CalendarConstant} from "../constants";

const getEvents = () => {
    return {
        type: CalendarConstant.GET_EVENTS
    }
}

const getEventsSuccess = (events) => {
    return {
        type: CalendarConstant.GET_EVENTS_SUCCESS,
        payload: events
    }
}

const createEvent = (payload) => {
    return {
        type: CalendarConstant.CREATE_EVENT,
        payload: payload
    }
}

const createEventSuccess = (result) => {
    return {
        type: CalendarConstant.CREATE_EVENT_SUCCESS,
        payload: result
    }
}

const updateEvent = (payload) => {
    return {
        type: CalendarConstant.UPDATE_EVENT,
        payload: payload
    }
}

const updateEventSuccess = (result) => {
    return {
        type: CalendarConstant.UPDATE_EVENT_SUCCESS,
        payload: result
    }
}

const deleteEvent = (payload) => {
    return {
        type: CalendarConstant.DELETE_EVENT,
        payload: payload
    }
}

const deleteEventSuccess = () => {
    return {
        type: CalendarConstant.DELETE_EVENT_SUCCESS,
    }
}

export const CalendarAction = {
    getEvents,
    getEventsSuccess,
    createEvent,
    createEventSuccess,
    updateEvent,
    updateEventSuccess,
    deleteEvent,
    deleteEventSuccess,
};
