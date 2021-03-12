import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../utils/Context/UserContext';
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
    const { token, loggedInAs, changeUser } = useContext(UserContext)
    const showSidebar = () => setSidebar(!sidebar);
    const [newSidebarData, setNewSidebarData] = useState([])

    useEffect(() => {
        if (token) {
            switch(loggedInAs) {
                case 'business': setNewSidebarData(SidebarData.filter(item => item.accessTo.includes('business')))
                break;
                case 'user': setNewSidebarData(SidebarData.filter(item => item.accessTo.includes('user')))
                break
                default: setNewSidebarData(SidebarData.filter(item => item.accessTo === 'user & business'))
            }
        } else {
            setNewSidebarData(SidebarData.filter(item => item.accessTo === 'anyone' || item.accessTo === 'user & business'))
        }
    }, [token, loggedInAs]);

    function signOut() {
        document.cookie = "token=; Max-Age=0";
        document.cookie = "loggedInAs=; Max-Age=0";
        changeUser('', '');
    }

    return (
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
                <img src={logo} />
            </div>
            <div className="header_left">
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
            <div className="header_right" style={{cursor: 'pointer'}}>
                <div className="header_info" onClick={signOut}>
                    <Avatar src="" />
                    <h4>Brett </h4>
                </div>
            </div>
        </div>
    )
}
export default Header