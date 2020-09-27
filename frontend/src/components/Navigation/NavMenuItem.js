import React from 'react';
import PropTypes from "prop-types";
import {List} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MenuTooltip from "./MenuTooltip";

const NavMenuItem = props => {
  const {name, icon, link} = props;

  return (
      <List component="div" className='nav-menu-item'>
          <MenuTooltip name={name} placement="right" title={
              <React.Fragment>
                  <Typography color="inherit">{name}</Typography>
              </React.Fragment>
          }>
              <NavLink className="prepend-icon nav-menu-link" exact to={link}>
                  {/* Display an icon if any */}
                  {!!icon && (
                      <i className={'zmdi zmdi-hc-fw zmdi-' + icon}/>
                  )}
              </NavLink>
          </MenuTooltip>
      </List>
  )
};

NavMenuItem.propTypes = {
    name: PropTypes.string,
    subject: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
};

export default NavMenuItem;