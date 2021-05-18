import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home"
import WhatShotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"


// Icon is capitalised because is is a component, 
// We are sending a component as a prop

function Sidebar() {
    return (
      <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatShotIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        <hr/>
      </div>
    );
}

export default Sidebar
