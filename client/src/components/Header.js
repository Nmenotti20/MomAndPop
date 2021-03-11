import React, { useState } from 'react';
import "./Header.css";
import logo from '../images/Pin_logo.png';
import HomeIcon from "@material-ui/icons/Home";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';

function Header() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div classNameName="container">
            <div className="d-flex justify-content-center h-100">

                <div className="header">
                    <div className="header_left">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <ul className='nav-menu-items' onClick={showSidebar}>
                                <li className='navbar-toggle'>
                                    <Link to='#' className='menu-bars'>
                                        <FaIcons.FaTimes />
                                    </Link>
                                </li>
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <img src={logo} />
                    </div>

                    <div className="header_center">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        {/* <div className="header_option header_option--active">
                            <HomeIcon fontSize="large" />
                        </div>
                        <div className="header_option">
                            <SupervisedUserCircleIcon fontSize="large" />
                        </div> */}
                    </div>

                    <div className="header_right">
                        <div className="header_info">
                            <Avatar src="" />
                            <h4>Brett </h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header