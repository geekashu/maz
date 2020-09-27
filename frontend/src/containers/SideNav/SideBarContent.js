import React from 'react';
import CustomScrollbars from 'helpers/CustomScrollbars';
import Navigation from "components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      type: 'section',
      name: 'Main',
      children: [
        {
          name: 'MAZ Calendar',
          type: 'item',
          icon: 'calendar',
          link: '/app/calendar',
        },
      ]
    },
    {
      type: 'section',
      name: 'Settings',
      children: [
        {
          name: "Logout",
          type: "item",
          icon: "run",
          link: "/logout",
        }
      ]
    }
  ];

  return (
    <CustomScrollbars className="scrollbar">
      <Navigation menuItems={navigationMenus}/>
    </CustomScrollbars>
  );
};

export default SideBarContent;
