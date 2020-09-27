import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStylesMenuTooltip = makeStyles((theme) => ({
    tooltip: {
        minWidth: 140,
        fontSize: theme.typography.pxToRem(17),
        border: '1px solid #2d3238',
        boxShadow: '5px 5px 20px -5px #000',
        padding: '15px 20px 15px 20px',
        whiteSpace: `nowrap`,
        backgroundColor: '#2d3238',
        color: '#c7d0d9',
        marginLeft: '0px',
        borderRadius: '0px',
        marginTop: '1px',
    },
}));

const MenuTooltip = ({children, name, ...props}) => {
    const classes = useStylesMenuTooltip();


    return (
        <Tooltip
            disableFocusListener={!name}
            disableHoverListener={!name}
            disableTouchListener={!name}
            classes={classes}
            {...props}
        >
            {children}
        </Tooltip>
    )
}

MenuTooltip.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string,
};

export default MenuTooltip;