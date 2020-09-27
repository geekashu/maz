import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";

const RestrictedRoute = ({component: Component, token, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/logout" />
                )
            }
        />
    );

}

RestrictedRoute.propTypes = {
    component: PropTypes.func,
    token: PropTypes.string,
};

export default RestrictedRoute;
