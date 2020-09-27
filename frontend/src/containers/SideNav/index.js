import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import {ThemeAction} from "actions";
import {CalendarConstant} from 'constants/index';
import SideBarContent from "./SideBarContent";

const SideNav = () => {
  const dispatch = useDispatch();
  const {navCollapsed, width} = useSelector(({theme}) => theme);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(ThemeAction.updateWindowWidth(window.innerWidth))
    });
  }, [dispatch]);

  const onToggleCollapsedNav = () => {
    const val = !navCollapsed;
    dispatch(ThemeAction.toggleCollapsedNav(val));
  };

  let drawerStyle = 'd-flex';
  let type = 'permanent';
  if (width < 1200) {
      drawerStyle = 'd-xl-flex';
      type = 'temporary';
  }

  return (
    <div className={`app-sidebar d-none ${drawerStyle}`}>
      <Drawer className="app-sidebar-content"
              variant={type}
              open={type.includes('temporary') ? navCollapsed : true}
              onClose={onToggleCollapsedNav}
              classes={{
                paper: 'side-nav',
              }}
      >
          <div className="mirfak-logo-div d-flex flex-row align-items-center">
              <Link to={CalendarConstant.URL_CALENDAR}>
                  MAZ
              </Link>
          </div>
          <SideBarContent/>
      </Drawer>
    </div>
  );
};

export default withRouter(SideNav);

