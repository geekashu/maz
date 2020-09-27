import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, {history} from './store';

const store = configureStore();
const rootEl = document.getElementById('app-site');


let render = () => {
    const MainApp = require('./MainApp').default;
    ReactDOM.render(
        <MainApp store={store} history={history}/>, rootEl
    );
};

if (module.hot) {
    module.hot.accept('./MainApp', () => {
        const NextApp = require('./MainApp').default;
        render(
            <NextApp store={store} history={history}/>, rootEl
        );
    });
}

render();
