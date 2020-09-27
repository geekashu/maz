import React from "react";
import PropTypes from "prop-types";

const CircularProgress = ({className}) => <div className={`loader ${className}`}>
    <svg className="circular" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
    </svg>
</div>;

CircularProgress.propTypes = {
    className: PropTypes.string,
};

export default CircularProgress;
