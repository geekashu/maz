import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";

import asyncComponent from "helpers/asyncComponent";

const Calendar = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Route exact path={`${match.url}/`}
                   component={asyncComponent(() => import('containers/Calendar'))} />

            {/*<Route exact path={`${match.url}/add`}*/}
            {/*       component={asyncComponent(() => import('containers/Calendar/Add'))} />*/}
            
            {/*<Route exact path={`${match.url}/widget/add`}*/}
            {/*       component={asyncComponent(() => import('containers/Calendar/Widget'))} />*/}
            {/*<Route exact path={`${match.url}/widget/:id/:operation`}*/}
            {/*       component={asyncComponent(() => import('containers/Calendar/Widget'))} />*/}

            <Route component={asyncComponent(() => import('containers/Errors/404'))}/>
        </Switch>
    </div>
);

Calendar.propTypes = {
    match: PropTypes.object,
};

export default withRouter(Calendar);