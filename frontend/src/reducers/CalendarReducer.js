import {CalendarConstant} from "../constants";

const initialState = {
    events: [],
};

function CalendarReducer(state=initialState, action) {
    switch (action.type) {
        case CalendarConstant.GET_EVENTS_SUCCESS: {
            return {
                ...state,
                events: action.payload,
            }
        }

        default:
            return state;
    }
}

export default CalendarReducer;
