import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {toast, ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "@material-ui/core";
import {AuthAction, CommonAction} from "actions";
import {AuthSelector, CommonSelector} from "selectors";
import LoginForm from "./LoginForm";


const SignIn = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(AuthSelector.getAuthToken());
    const alertMessage = useSelector(CommonSelector.getAlertMessage());
    const alertMessageFlag = useSelector(CommonSelector.getAlertMessageFlag());

    useEffect(() => {
        if (token !== null) {
            props.history.push('/');
        }
    }, [token, props.history]);

    // Logic to display Toastify alerts.
    useEffect(() => {
        let toastId = null;
        if (alertMessage) {
            if (alertMessageFlag === 'error') {
                if (!toast.isActive(toastId)) {
                    toastId = toast.error(alertMessage);
                }
            }

            // In any case, clear the message.
            dispatch(CommonAction.hideMessage());
        }
    }, [alertMessage, alertMessageFlag, dispatch]);

    const handleSubmit = (params) => {
        dispatch(AuthAction.signIn(params));
    }

    return (
        <div className="animated slideInUpTiny animation-duration-3 container-fluid signin">
            <div className="row">
                <div className="maz-container d-flex col-xs-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3 pl-3">
                    <div className="col-sm-5 maz-panel-left">
                        <div className="brand-col">
                            <div className="headline justify-content-center">
                                <div className="jr-fs-xlxl text-center text-capitalize">MAZ Systems</div>
                                <hr className="text-white bg-white"/>

                                <div className="jr-fs-xl text-center">Calendar App</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 maz-panel-right pl-3 pr-3">
                        <div className="maz-login">
                            <div className="maz-panel text-center active">
                                <div className="maz-heading mt-4 mb-3">
                                    <span className="jr-fs-xxl font-weight-bold">Login to your account</span>
                                    <p className="font-weight-light font-size-20 mt-2">Don’t have an account? &nbsp;
                                        <Link data-panel=".panel-signup" href={"mailto:geekashu@gmail.com"}>Contact Ashish!</Link>
                                    </p>
                                </div>
                                <div className="row">
                                    <LoginForm onSubmit={handleSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

SignIn.propTypes = {
    history: PropTypes.object,
};

export default SignIn;

