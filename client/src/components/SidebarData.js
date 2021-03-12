import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Avatar } from '@material-ui/core';

export const SidebarData = [
    {
        title: 'Home',
        accessTo: 'user & business',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Settings',
    //     path: '/settings',
    //     icon: <FaIcons.FaCog />,
    //     cName: 'nav-text '
    // },
    {
        title: 'Profile',
        accessTo: 'user',
        path: '/profile',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text '
    },
    {
        title: 'Shopper Login',
        accessTo: 'anyone',
        path: '/userlogin',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text '
    },
    {
        title: 'Profile',
        accessTo: 'business',
        path: '/businessprofile',
        icon: <FaIcons.FaUserTie />,
        cName: 'nav-text '
    },
    {
        title: 'Business Login',
        accessTo: 'anyone',
        path: '/businesslogin',
        icon: <FaIcons.FaUserTie />,
        cName: 'nav-text '
    }
];