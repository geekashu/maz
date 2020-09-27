/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();
const immutableMiddleware = reduxImmutableStateInvariant();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routeMiddleware, immutableMiddleware, loggerMiddleware];

const composeSetup = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer(history),
        initialState,
        composeSetup(
            applyMiddleware(
                ...middlewares
            )
        )
    );
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

export { history };
