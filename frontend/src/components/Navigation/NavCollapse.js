import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {Collapse, List, ListItem} from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import {useHistory} from 'react-router-dom';

import NavSection from "./NavSection";
import NavMenuItem from "./NavMenuItem";
import MenuTooltip from "./MenuTooltip";

const NavCollapse = props => {
  const history = useHistory();

  const {name, icon, children = []} = props;
  const isExpandable = children && children.length > 0;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    // eslint-disable-next-line
  }, [history.location.pathname]);

  function handleClick() {
    setOpen(!open)
  }

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   * @param parent
   * @param url
   * @returns {boolean}
   */
  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (parent.children[i].link === url || url.includes(parent.children[i].link)) {
        return true;
      }
    }

    return false;
  }

  const MenuCollapse = (
    <MenuTooltip name={name} placement="right" title={
      <React.Fragment>
        <Typography color="inherit">{name}</Typography>
      </React.Fragment>
    }>
      <ListItem className='nav-collapse-btn' button onClick={handleClick}>
        {/* Display an icon if any */}
        <div className="d-flex">

          {!!icon && (
              <i className={'zmdi zmdi-hc-fw  zmdi-' + icon}/>
          )}
          {/* Display the expand menu if the item has children */}
          {isExpandable && !open && <IconExpandMore fontSize="small" className='nav-arrow'/>}
          {isExpandable && open && <IconExpandLess fontSize="small" className='nav-arrow'/>}
        </div>
      </ListItem>
    </MenuTooltip>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse className='nav-collapse-item' in={open} timeout="auto">
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
    </Collapse>
  ) : null;

  return (
    <div className={`nav-collapse`}>
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  )
};

NavCollapse.propTypes = {
  name: PropTypes.string,
  subject: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.array,
};

export default NavCollapse;