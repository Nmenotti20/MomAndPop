import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../utils/Context/UserContext';
import "./Header.css";
import logo from '../images/Pin_logo.png';

import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
function Header() {
    const [sidebar, setSidebar] = useState(false);
    const { token, loggedInAs, name, image, changeUser } = useContext(UserContext)
    const showSidebar = () => setSidebar(!sidebar);
    const [newSidebarData, setNewSidebarData] = useState([])

    useEffect(() => {
        if (token) {
            switch(loggedInAs) {
                case 'business': setNewSidebarData(SidebarData.filter(item => item.accessTo.includes('business')))
                break;
                case 'user': setNewSidebarData(SidebarData.filter(item => item.accessTo.includes('user')))
                break
                default: setNewSidebarData(SidebarData.filter(item => item.accessTo === 'user & business' || item.accessTo === 'anyone'))
            }
        } else {
            setNewSidebarData(SidebarData.filter(item => item.accessTo === 'anyone' || item.accessTo === 'user & business'))
        }
    }, [token, loggedInAs]);

    function signOut() {
        document.cookie = "token=; Max-Age=0";
        localStorage.removeItem("loggedInAs");
        localStorage.removeItem("name");
        localStorage.removeItem("image");
        // document.cookie = "loggedInAs=; Max-Age=0";
        // document.cookie = "name=; Max-Age=0";
        // document.cookie = 'image=; Max-Age=0';
        changeUser('', '', '', '');
    }

    function profileIcon() {
        if (name) {
            return (
               
                    <div className="header_right">
                        <div className="header_info">
                            <Avatar src={image} />
                            <div>
                            <h4>{name}</h4>
                            <a href="/" onClick={signOut} style={{cursor: 'pointer', textDecoration: 'underline'}}>Sign Out</a>
                            </div>
                        </div>
                    </div>
            )
        }
    }

    return (
        <div className="header">
            <div className="header_left">
                <div>
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
                            {newSidebarData.map((item, index) => {
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
                </div>
                
                <img alt="company logo" src={logo} />
            </div>
            <div className="header_left full-header">
                {newSidebarData.map((item, index) => {
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
            {
                profileIcon()
            }
        </div>
    )
}
export default Header