import {ThemeConstant} from "../constants";

const toggleCollapsedNav = (isNavCollapsed) => {
    return {
        type: ThemeConstant.TOGGLE_COLLAPSED_NAV,
        isNavCollapsed
    }
};

const updateWindowWidth = (width) => {
    return {
        type: ThemeConstant.WINDOW_WIDTH,
        width
    };
};

export const ThemeAction = {
    toggleCollapsedNav,
    updateWindowWidth,
};
