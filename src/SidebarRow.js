import React from 'react'
import "./SidebarRow.css"

// className is sidebarRow selected, where selected is only applied based 
//on if selected prop is true or false

function SidebarRow({selected, Icon, title }) {
    return (
      <div className={`sidebarRow ${selected && "selected"}`}> 
        <Icon className="sidebarRow__icon"/>
        <h2 className="sidebarRow__title">{title}</h2>
      </div>
    );
}

export default SidebarRow
