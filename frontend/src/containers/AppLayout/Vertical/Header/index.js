import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ThemeAction} from "actions";

const Index = (props) => {

  const dispatch = useDispatch();
  const {width} = useSelector(({theme}) => theme);

  const onToggleCollapsedNav = () => {
    const val = !props.navCollapsed;
    dispatch(ThemeAction.toggleCollapsedNav(val));
  };

  let drawerStyle = "d-none";
  if (width < 1200) {
      drawerStyle = "d-block d-xl-none";
  }

  return (
    <AppBar className="app-main-header">
      <Toolbar className="app-toolbar" disableGutters={false}>
        <IconButton className={`jr-menu-icon mr-3 ${drawerStyle}`} aria-label="Menu"
                    onClick={onToggleCollapsedNav}>
          <span className="menu-icon"/>
        </IconButton>

        <div className="ellipse-shape"/>
      </Toolbar>
    </AppBar>
  );
};

Index.propTypes = {
  navCollapsed: PropTypes.bool,
};

export default withRouter(Index);
