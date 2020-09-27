import React from "react";
import PropTypes from "prop-types";
import {CircularProgress} from '@material-ui/core';

const LoaderTypography = ({title, loader}) => {
    return (
        <div className="text-white d-flex">
            <span className="font-size-20 font-weight-light">{title}</span>

            {loader &&
                <div className="ml-3 mt-1">
                    <CircularProgress size={20} color="inherit"/>
                </div>
            }
        </div>
    )
}

LoaderTypography.propTypes = {
    title: PropTypes.string,
    loader: PropTypes.bool
}

export default LoaderTypography;