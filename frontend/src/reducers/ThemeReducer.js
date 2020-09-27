import {ThemeConstant} from '../constants';

const initialState = {
    navCollapsed: false,
    width: window.innerWidth
};

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                navCollapsed: false
            };

        case ThemeConstant.TOGGLE_COLLAPSED_NAV:
            return {
                ...state,
                navCollapsed: action.isNavCollapsed
            };

        case ThemeConstant.WINDOW_WIDTH:
            return {
                ...state,
                width: action.width
            };

        default:
            return state
    }
};

export default ThemeReducer;



