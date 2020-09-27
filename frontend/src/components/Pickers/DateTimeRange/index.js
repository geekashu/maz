import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {DashboardSelector} from "selectors";
import {CalendarAction} from "actions";


const now = Math.floor(Date.now() / 1000)
export const intervalRanges = {
    "Last 15 Minutes": [now - 900, now, 10],
    "Last 1 Hour": [now - 3600, now, 20],
    "Last 3 Hours": [now - 3600*3, now, 60],
    "Last 6 Hours": [now - 3600*6, now, 120],
    "Last 12 Hours": [now - 3600*12, now, 300],
    "Last 24 Hours": [now - 3600*24, now, 400],
    "Last 3 Days": [now - 3600*24*3, now, 900],
    "Last 7 Days": [now - 3600*24*7, now, 3600],
    "Last 30 Days": [now - 3600*24*30, now, 10800],
    "Last 90 Days": [now - 3600*24*90, now, 43200],
    "Last 180 Days": [now - 3600*24*180, now, 43200],
};

export const refreshRanges = {
    "Off": 0,
    "5s": 5,
    "10s": 10,
    "30s": 30,
    "1m": 60,
    "5m": 300,
    "15m": 900,
    "30m": 1800,
    "1h": 3600,
};

const DateTimeRange = () => {
    const dispatch = useDispatch();
    const queryInterval = useSelector(DashboardSelector.queryInterval());
    const refreshInterval = useSelector(DashboardSelector.refreshInterval());
    const isPolling = useSelector(DashboardSelector.isPolling());

    const [displayIntervalLabel, setDisplayIntervalLabel] = useState("Select Date Range");
    const [displayRefreshLabel, setDisplayRefreshLabel] = useState("Refresh");
    const [openDateTimeMenu, setOpenDateTimeMenu] = useState(false);
    const [openRefreshMenu, setOpenRefreshMenu] = useState(false);

    const updateIntervalLabel = (needle) => {
        const label = _.findKey(intervalRanges, (range) => {
            const needleDiff = needle[1] - needle[0];
            const rangeDiff = range[1] - range[0];
            return rangeDiff === needleDiff;
        })
        setDisplayIntervalLabel(label);
    }

    const updateRefreshLabel = (needle) => {
        const label = _.findKey(refreshRanges, (range) => {
            return range === parseInt(needle);
        })
        setDisplayRefreshLabel(label);
    }

    useEffect(() => {
        if(queryInterval) {
            updateIntervalLabel(queryInterval);
        }
    },[queryInterval])

    useEffect(() => {
        if(refreshInterval >= 0) {
            updateRefreshLabel(refreshInterval);
        }
    },[refreshInterval])

    const onDateTimeSelect = () => {
        setOpenDateTimeMenu(!openDateTimeMenu);
    };

    const onRefreshSelect = () => {
        setOpenRefreshMenu(!openRefreshMenu);
    }

    const handleRefreshInterval = (event) => {
        const interval = parseInt(event.target.value)
        dispatch(CalendarAction.setRefreshInterval(interval));
        if (interval <= 0) {
            dispatch(CalendarAction.stopWidgetPolling());
        } else if (!isPolling) {
            dispatch(CalendarAction.startWidgetPolling());
        }
    };

    const handleQueryInterval = (event) => {
        const interval = _.map((event.target.value).split(','), _.ary(parseInt, 1));
        dispatch(CalendarAction.setQueryInterval(interval))
        if(refreshInterval <= 0) {
            dispatch(CalendarAction.stopWidgetPolling());
        } else if (!isPolling) {
            dispatch(CalendarAction.startWidgetPolling());
        }
    }

    return (
        <ul className="header-notifications list-inline ml-auto">
            <li className="list-inline-item">
                <Dropdown
                    className="quick-menu app-notification text-white"
                    isOpen={openDateTimeMenu}
                    toggle={onDateTimeSelect}>

                    <DropdownToggle className="d-inline-block" tag="span" data-toggle="dropdown">
                        <span className="app-notification-menu">
                            <i className="zmdi zmdi-time zmdi-hc-fw zmdi-hc-lg"/>
                            <span>{displayIntervalLabel}</span>
                        </span>
                    </DropdownToggle>

                    <DropdownMenu>
                        {
                            _.map(intervalRanges, (value, key) => {
                                const active = key === displayIntervalLabel
                                return (
                                    <DropdownItem
                                        key={value + 'i'}
                                        value={value}
                                        className={active ? "jr-btn bg-deep-purple text-white" : "jr-btn"}
                                        onClick={handleQueryInterval}>
                                            {active ?
                                                <>
                                                    {key}
                                                    <i className="zmdi zmdi-check zmdi-hc-fw ml-1"/>
                                                </>
                                                :
                                                key
                                            }
                                    </DropdownItem>
                                )
                            })
                        }
                    </DropdownMenu>
                </Dropdown>
            </li>
            <li className="list-inline-item">
                <Dropdown
                    className="quick-menu app-notification text-white"
                    isOpen={openRefreshMenu}
                    toggle={onRefreshSelect}>

                    <DropdownToggle className="d-inline-block" tag="span" data-toggle="dropdown">
                        <span className="app-notification-menu">
                            <i className="zmdi zmdi-refresh zmdi-hc-fw zmdi-hc-lg"/>
                            <span>{displayRefreshLabel}</span>
                        </span>
                    </DropdownToggle>

                    <DropdownMenu>
                        {
                            _.map(refreshRanges, (value, key) => {
                                const active = key === displayRefreshLabel
                                return (
                                    <DropdownItem
                                        key={value + 'r'}
                                        value={value}
                                        className={active ? "jr-btn bg-deep-purple text-white" : "jr-btn"}
                                        onClick={handleRefreshInterval}>
                                            {active ?
                                                <>
                                                    {key}
                                                    <i className="zmdi zmdi-check zmdi-hc-fw ml-1"/>
                                                </>
                                                :
                                                key
                                            }
                                    </DropdownItem>
                                )
                            })
                        }
                    </DropdownMenu>
                </Dropdown>
            </li>
        </ul>
    )
}

DateTimeRange.propTypes = {
    refreshInterval: PropTypes.number,
    queryInterval: PropTypes.array,
    setRefreshInterval: PropTypes.func,
    setQueryInterval: PropTypes.func,
}

export default DateTimeRange;