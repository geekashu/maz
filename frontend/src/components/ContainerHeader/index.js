import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {DashboardConstant} from 'constants/index';


const ContainerHeader = ({title, match}) => {
  const path = match.path.substr(1);
  const subPath = path.split('/');
  const history = useHistory();

  const getDisplayString = (sub) => {
    const arr = sub.split("-");
    if (arr.length > 1) {
      return arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + " " + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)
    } else {
      return sub.charAt(0).toUpperCase() + sub.slice(1)
    }

  };
  const getUrlString = (path, sub, index) => {
    if (index === 0) {
      return DashboardConstant.URL_DASHBOARD;
    } else {
      return '/' + path.split(sub)[0] + sub;
    }
  };

  return (
    <div className={`page-heading pl-3 pr-3 d-sm-flex justify-content-sm-between align-items-sm-center`}>
      <span className="title mb-3 mb-sm-0 font-size-20 font-weight-light">{title}</span>

      <Breadcrumb className="mb-0" tag="nav">
        {subPath.map((sub, index) => {
              return (
                  subPath.length === index + 1 ?
                      <BreadcrumbItem active={subPath.length === index + 1} className="disabled" tag="span" key={index}>
                        {getDisplayString(sub)}
                      </BreadcrumbItem>
                      :
                      <BreadcrumbItem active={subPath.length === index + 1} className="jr-link"
                                      tag="a" key={index} onClick={() => history.push(getUrlString(path, sub, index))}>
                        {getDisplayString(sub)}
                      </BreadcrumbItem>

              )
            }
        )}
      </Breadcrumb>
    </div>
  )
};

ContainerHeader.propTypes = {
  title: PropTypes.string,
  match: PropTypes.object,
};

export default ContainerHeader;

