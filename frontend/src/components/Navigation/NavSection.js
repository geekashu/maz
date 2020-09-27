import React from 'react';
import PropTypes from "prop-types";
import {List} from '@material-ui/core';

import NavMenuItem from "./NavMenuItem";
import NavCollapse from "./NavCollapse";

const NavSection = props => {
  const {name, icon, children = []} = props;
  const isExpandable = children && children.length > 0;

  const MenuCollapse = (
      <List component="div" className='nav-header'>
        {/* Display an icon if any */}
        {!!icon && (
            <i className={'zmdi zmdi-hc-fw  zmdi-' + icon}/>
        )}
        {name}
      </List>
  );

  const MenuItemChildren = isExpandable ? (
      <List component="div" disablePadding>
        {
          // eslint-disable-next-line
          children.map((item, index) => {
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
  ) : null;

  return (
    <div className="nav-section">
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  )
};

NavSection.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.array,
};

export default NavSection;