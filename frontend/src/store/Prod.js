import { createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routeMiddleware];

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer(history),
        initialState,
        compose(
            applyMiddleware(
                ...middlewares
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export { history };
