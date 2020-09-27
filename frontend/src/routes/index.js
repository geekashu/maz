import React from 'react';
import PropTypes from "prop-types";
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from "helpers/asyncComponent";

const Routes = ({ match }) =>
    <Switch>
        <Route path={`${match.url}/calendar`}
               component={asyncComponent(() => import('routes/apps/calendar'))}/>

        <Route path={`${match.url}/5xx`} component={asyncComponent(() => import('containers/Errors/5xx'))} />
        <Route component={asyncComponent(() => import('containers/Errors/404'))}/>
    </Switch>;

Routes.propTypes = {
    match: PropTypes.object,
};

export default withRouter(Routes);
