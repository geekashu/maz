import {CommonConstant} from '../constants';

const hideMessage = () => {
    return {
        type: CommonConstant.HIDE_MESSAGE,
    }
};

const showMessage = (message, flag=null) => {
    return {
        type: CommonConstant.SHOW_MESSAGE,
        payload: message,
        flag: flag,
    };
};

const startLoader = (name, params) => ({
    type: CommonConstant.START_LOADER,
    payload: {
        action: { name, params }
    }
});

const stopLoader = name => ({
    type: CommonConstant.STOP_LOADER,
    payload: { name }
});

// const startPromQLPolling = (name, params) => ({
//     type: CommonConstant.START_PROMQL_POLLING,
//     payload: {
//         action: { name, params }
//     }
// });
//
// const updatePromQLPolling = (name, interval) => ({
//     type: CommonConstant.UPDATE_PROMQL_POLLING,
//     payload: { name, interval }
// });
//
// const stopPromQLPolling = name => ({
//     type: CommonConstant.STOP_PROMQL_POLLING,
//     payload: { name }
// });
//
// const setQueryInterval = (payload) => {
//     return {
//         type: CommonConstant.SET_QUERY_INTERVAL,
//         payload: payload
//     }
// }
//
// const setRefreshInterval = (payload) => {
//     return {
//         type: CommonConstant.SET_REFRESH_INTERVAL,
//         payload: payload
//     }
// }

export const CommonAction = {
    hideMessage,
    showMessage,
    startLoader,
    stopLoader,
    // startPromQLPolling,
    // updatePromQLPolling,
    // stopPromQLPolling,
    // setQueryInterval,
    // setRefreshInterval,
};
