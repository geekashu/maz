import React, {useEffect} from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import {useDispatch, useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import {LocalizationProvider} from '@material-ui/pickers';
import "assets/vendors/style";
import AppTheme from "helpers/AppTheme";
import asyncComponent from "helpers/asyncComponent";
import RestrictedRoute from "helpers/RestrictedRoute";
import {AuthAction} from "actions";
import AppLayout from "./AppLayout";
import Logout from "containers/Logout";
import {AuthSelector} from "selectors";
import {getAuthInstance} from "helpers/Axios/axiosInstances";
import {CalendarConstant} from "../constants";


// Axios Instances
export const authInstance = getAuthInstance();


const App = (props) => {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    // const [initLoader, setInitLoader] =  useState(false);
    const initURL = useSelector(AuthSelector.getInitURL());
    const token = useSelector(AuthSelector.getAuthToken());
    // const isRememberMe = useSelector(AuthSelector.isRememberMe());

    // eslint-disable-next-line no-unused-vars
    const {match, location, history} = props;

    // Set the initial URL in Redux Store.
    useEffect(() => {
        window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
        if (initURL === '') {
            dispatch(AuthAction.setInitUrl(location.pathname));
        }
    },[dispatch, initURL, location.pathname]);

    // const getTokenSilently = () => {
    //     dispatch(AuthAction.getTokenSilently());
    // }

    // Not Have Enough Time to Implement This.
    // Set handle JWT
    // useEffect(() => {
    //     if (token && location.pathname !== '/logout' && location.pathname !== '/login') {
    //         let jwt = parseJWT(token);
    //         let expiresDiff = jwt.exp ? jwt.exp - (Date.now()/1000) : -1;
    //
    //         // 1. Token expired -
    //         if (expiresDiff < 0) {
    //             isRememberMe ? getTokenSilently() : props.history.push('/logout');
    //         // 2. Token expiry is less than TOKEN_EXPIRY_REFRESH_TIME
    //         } else if (
    //             expiresDiff < process.env.TOKEN_EXPIRY_REFRESH_TIME &&
    //             props.location.pathname !== '/login'
    //         ) {
    //             getTokenSilently()
    //         }
    //     }
    //     // eslint-disable-next-line
    // }, [location.pathname])


    // axios authJWT Interceptor
    useEffect(() => {
        authInstance.interceptors.request.use( config => {
            const tkn = localStorage.getItem('token');
            if (tkn) {
                config.headers['Authorization'] = 'JWT ' + tkn;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        })
    },[])

    // Intercept authInstance response for possible error(s) and act accordingly.
    useEffect(() => {
        authInstance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if(!error.response) {
                history.push('/app/5xx');
            } else {
                if (error.response.status >= 500) {
                    history.push('/app/5xx');
                } else if (error.response.status === 401) {
                    history.push('/logout');
                }
            }
            return Promise.reject(error);
        });
        // eslint-disable-next-line
    },[])

    // If user is not Authenticated Redirect to Login else Redirect as needed.
    if(location.pathname === '/') {
        if (_.isNil(token)) {
            return ( <Redirect to={'/login'}/> );
        } else if (initURL === '' || initURL === '/' || initURL === '/login') {
            return ( <Redirect to={CalendarConstant.URL_CALENDAR}/> );
        } else {
            return ( <Redirect to={initURL}/> );
        }
    }

    // Set theme related properties.
    const applyTheme = createMuiTheme(AppTheme);
    document.body.classList.remove('rtl');
    applyTheme.direction = 'ltr';

    return (
        <MuiThemeProvider theme={applyTheme}>
            <LocalizationProvider dateAdapter={MomentUtils}>
                <div className="app-main">
                    <Switch>
                        <RestrictedRoute path={`${match.url}app`} token={token} component={AppLayout}/>
                        <Route path='/login'
                               component={asyncComponent(() => import('containers/SignIn'))} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/5xx' component={asyncComponent(() => import('containers/Errors/5xx'))} />
                        <Route component={asyncComponent(() => import('containers/Errors/404'))}/>
                    </Switch>
                </div>
            </LocalizationProvider>
        </MuiThemeProvider>
    );
};

App.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
};

export default App;