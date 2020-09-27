import {CommonConstant} from "../constants";
// import _ from 'lodash';


// const now = Math.floor(Date.now() / 1000)

const initialState = {
    alertMessage: '',
    alertMessageFlag: null,
    loader: {
        actions: [],
    }
    // polling: {
    //     actions: [],
    // },
    // queryInterval: [now - 900, now, 15],
    // refreshInterval: 10,
};

function CommonReducer(state=initialState, {type, payload, flag}) {
    const {loader} = state;
    const {actions} = loader;

    switch (type) {
        case CommonConstant.SHOW_MESSAGE: {
            return {
                ...state,
                alertMessage: payload,
                alertMessageFlag: flag,
            }
        }

        case CommonConstant.HIDE_MESSAGE: {
            return {
                ...state,
                alertMessage: '',
                alertMessageFlag: null,
            }
        }

        case CommonConstant.START_LOADER:
            return {
                ...state,
                loader: {
                    ...loader,
                    actions: [...actions, payload.action]
                }
            };

        case CommonConstant.STOP_LOADER:
            return {
                ...state,
                loader: {
                    ...loader,
                    actions: actions.filter(action => action.name !== payload.name)
                }
            };

        // case CommonConstant.START_PROMQL_POLLING:
        //     return {
        //         ...state,
        //         polling: {
        //             ...polling,
        //             actions: [...polling.actions, payload.action]
        //         }
        //     };
        //
        // case CommonConstant.UPDATE_PROMQL_POLLING:
        //     return {
        //         ...state,
        //         polling: {
        //             ...polling,
        //             actions: _.map(polling.actions, (a) => {
        //                 return a.name === payload.name ? {
        //                     name: a.name,
        //                     params: {
        //                         interval: payload.interval,
        //                         query: {
        //                             ...a.params.query,
        //                             start: a.params.query.start + payload.interval,
        //                             end: a.params.query.end + payload.interval,
        //                         }
        //                     }
        //                 } : a;
        //             })
        //         }
        //     };
        //
        // case CommonConstant.STOP_PROMQL_POLLING:
        //     return {
        //         ...state,
        //         polling: {
        //             ...polling,
        //             actions: polling.actions.filter(action => action.name !== payload.name)
        //         }
        //     };
        //
        // case CommonConstant.SET_QUERY_INTERVAL:
        //     return {
        //         ...state,
        //         queryInterval: payload
        //     };
        //
        // case CommonConstant.SET_REFRESH_INTERVAL:
        //     return {
        //         ...state,
        //         refreshInterval: payload
        //     }

        default:
            return state;
    }
}

export default CommonReducer;
