import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import common  from "./CommonReducer";
import auth  from "./AuthReducer";
import theme from "./ThemeReducer";
import calendar from "./CalendarReducer";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    theme,
    common,
    auth,
    calendar,
});

export default rootReducer;