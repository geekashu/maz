import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";


const ButtonWithLoader = ({children, loader, ...props}) => {
    return (
        !loader ?
            <Button {...props}>
                {children}
            </Button>
            :
            <Button startIcon={<CircularProgress size={14}/>} {...props} disabled>
                {children}
            </Button>
    )
}

ButtonWithLoader.propTypes = {
    children: PropTypes.any,
    loader: PropTypes.bool.isRequired,
}

export default ButtonWithLoader;