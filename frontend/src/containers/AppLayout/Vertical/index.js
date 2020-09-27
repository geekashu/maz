import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import { withRouter } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { isIOS, isMobile } from "react-device-detect";

import Header from "./Header/index";
import Sidebar from "containers/SideNav/index";
import Footer from "components/Footer";
import { CommonSelector } from "selectors";
import { CommonAction } from "actions";

const Vertical = (props) => {
    const dispatch = useDispatch();
    const {width} = useSelector(({theme}) => theme);
    const alertMessage = useSelector(CommonSelector.getAlertMessage());
    const alertMessageFlag = useSelector(CommonSelector.getAlertMessageFlag());

    // Logic to display Toastify alerts.
    useEffect(() => {
        let toastId = null;
        if (alertMessage) {
            if (alertMessageFlag === 'success') {
                if (!toast.isActive(toastId)) {
                    toastId = toast.success(alertMessage);
                }
            } else if (alertMessageFlag === 'error') {
                if (!toast.isActive(toastId)) {
                    toastId = toast.error(alertMessage);
                }
            } else {
                if (!toast.isActive(toastId)) {
                    toastId = toast(alertMessage);
                }
            }

            // In any case, clear the message.
            dispatch(CommonAction.hideMessage());
        }
    }, [alertMessage, alertMessageFlag, dispatch]);

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add("ios-mobile-view-height");
    } else if (document.body.classList.contains("ios-mobile-view-height")) {
      document.body.classList.remove("ios-mobile-view-height");
    }

    let drawerStyle = "mini-drawer";
    if (width < 1200) {
        drawerStyle = "fixed-drawer";
    }

    return (
      <div className={`app-container ${drawerStyle}`}>
        <Sidebar/>
        <div className="app-main-container">
          <div className="app-header">
            <Header/>
          </div>
          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              {props.children}
            </div>
            <Footer/>
          </main>
        </div>
        <ToastContainer />
      </div>
    );
  };

Vertical.propTypes = {
    children: PropTypes.any,
};

export default withRouter(Vertical);
