import {authInstance} from "containers/App";

export const CalendarService = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
};

function getEvents() {
    return authInstance.get('/api/events')
        .then(response => {
            if (response.data.errors) {
                return Promise.reject(response);
            }
            return response.data;
        });
}

function createEvent(params) {
    return authInstance.post('/api/events/', params)
        .then(response => {
            if (response.data.errors) {
                return Promise.reject(response);
            }
            return response.data;
        });
}

function updateEvent(params) {
    return authInstance.patch('/api/events/', params)
        .then(response => {
            if (response.data.errors) {
                return Promise.reject(response);
            }
            return response.data;
        });
}

function deleteEvent(params) {
    return authInstance.delete('/api/events/', params)
        .then(response => {
            if (response.data.errors) {
                return Promise.reject(response);
            }
            return response.data;
        });
}
