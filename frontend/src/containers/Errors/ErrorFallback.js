import React from 'react';
import {Link} from 'react-router-dom';
import {CalendarConstant} from '../../constants';


const ErrorFallback = () => (
    <div className="app-wrapper page-error-container animated slideInUpTiny animation-duration-3">
        <div className="page-error-content">
            <div className="error-code mb-4 animated zoomInDown">d&apos;oh</div>
            <h2 className="text-center fw-regular title bounceIn animation-delay-10 animated">
                Something went wrong. We have been notified of the same. Please try again after some time.
            </h2>

            <p className="text-center zoomIn animation-delay-20 animated">
                <Link className="btn btn-primary" to={CalendarConstant.URL_CALENDAR}>Go Home</Link>
            </p>
        </div>
    </div>
);

export default ErrorFallback;
