import React from 'react';
import {List} from '@material-ui/core';
import NavMenuItem from "./NavMenuItem";
import NavSection from "./NavSection";
import NavCollapse from "./NavCollapse";
import PropTypes from "prop-types";

const Navigation = props => {
  const {menuItems} = props;
  return (
    <List component="nav" disablePadding className='side-nav-menu'>
      {
        // eslint-disable-next-line
        menuItems.map((item, index) => {
          // eslint-disable-next-line
          switch (item.type) {
            case 'section' :
              return <NavSection {...item} key={index}/>;
            case 'collapse' :
              return <NavCollapse {...item} key={index}/>;
            case 'item' :
              return <NavMenuItem {...item} key={index}/>;
          }
        })
      }
    </List>
  )
};

Navigation.propTypes = {
  menuItems: PropTypes.any,
};

export default Navigation;