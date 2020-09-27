import React from 'react';
import PropTypes from "prop-types";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import App from 'containers/App';

const MainApp = ({store, history}) =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>;


MainApp.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
};

export default MainApp;
