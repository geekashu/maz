import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import {CommonAction} from "actions";
import {CalendarConstant} from '../../constants';


const Error5xx = () => {
    const dispatch = useDispatch();
    const {alertMessage, showMessage} = useSelector(({auth}) => auth);

    useEffect(() => {
        if (showMessage) {
            toast(alertMessage);
            setTimeout(() => {
                dispatch(CommonAction.hideMessage());
            }, 10000);
        }
    }, [showMessage, alertMessage, dispatch]);

    return (
        <div className="app-wrapper page-error-container animated slideInUpTiny animation-duration-3">
            <div className="page-error-content">
                <div className="error-code mb-4 animated zoomInDown">5XX</div>
                <h2 className="text-center fw-regular title bounceIn animation-delay-10 animated">
                    Not able to connect with backend services. Please try later!
                </h2>
                <p className="text-center zoomIn animation-delay-20 animated">
                    <Link className="btn btn-primary" to={CalendarConstant.URL_CALENDAR}>Go Home</Link>
                </p>
            </div>

            <ToastContainer/>
        </div>
    );
}

Error5xx.propTypes = {
    alertMessage: PropTypes.string,
    showMessage: PropTypes.bool,
    hideMessage: PropTypes.func,
};

export default Error5xx;
