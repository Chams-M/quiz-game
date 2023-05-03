import React from 'react';
import './SideBar.css';
import {Link, NavLink} from 'react-router-dom';
import { SidebarData } from '../../../../Data/Data';


const SideBar = () => {
  return (
    <div className="sidenav">
      <span>Quiz Time</span>
   <div className="menu">
   {SidebarData.map((item,index)=>{
      return (
        <div className="menuItem">
          <item.icon/>
          <span>{item.heading}</span>
        </div>
      );
    })}
   </div>
     </div>
  
  )
}

export default SideBar
