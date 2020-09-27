import React from "react";
import PropTypes from "prop-types";
import ArrowBackIcon from '@material-ui/icons/ArrowBackOutlined';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";


const GoBack = ({tooltip, history}) => {
    const handleGoBack = () => {
        history.goBack();
    }

    const msg = "Go back to "+tooltip

    return <React.Fragment>
        <Tooltip title={msg}>
            <IconButton onClick={handleGoBack}>
                <ArrowBackIcon className="text-white" />
            </IconButton>
        </Tooltip>
    </React.Fragment>
}

GoBack.propTypes = {
    tooltip: PropTypes.string,
    history: PropTypes.object,
}

export default GoBack;