import React, { useState } from "react";
import { Link } from 'react-router-dom';

import * as mdIcons from  "react-icons/md";
import * as aiIcons from  "react-icons/ai";
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';
import './css/SideBar.css';
const SideBar = () => {
   const [sidebar, setSidebar] = useState(false);

   const showSideBar = () => {
      setSidebar(!sidebar)
   }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
         <Link className="menu-button">
           <mdIcons.MdSort onClick={ showSideBar } />
         </Link>
      </div>

      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={ showSideBar }>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <aiIcons.AiOutlineCloseCircle/>
            </Link>
          </li>
          {
             SidebarData.map((item, index) => {
                return(
                   <li key={index} className={item.cName}>
                     <Link to={item.path}>
                       <span>{item.title}</span>
                     </Link>
                   </li>
                )
             })
          }
        </ul>
      </nav>

     </IconContext.Provider>
    </>
  );
};
export default SideBar;
