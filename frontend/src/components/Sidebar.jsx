import React from 'react'
import homeicon from "../images/icons/home.svg";
import shortsicon from "../images/icons/shorts.svg";
import subscriptionsicon from "../images/icons/subscriptions.svg";
import historyicon from "../images/icons/history.svg";
import watchicon from "../images/icons/watch.svg";
import likeicon from "../images/icons/like.svg";

import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="menubox">
        <SidebarMenu icon={homeicon} title="Home"/>
        <SidebarMenu icon={shortsicon} title="Shorts"/>
        <SidebarMenu icon={subscriptionsicon} title="Subscriptions"/>
      </div>
      <div className="menubox">
        <SidebarMenu icon={historyicon} title="History"/>
        <SidebarMenu icon={watchicon} title="Watch later"/>
        <SidebarMenu icon={likeicon} title="Liked videos"/>
      </div>

    </div>
  )
}

export default Sidebar