import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FaIcons.FaCog />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Business Profile',
        path: '../pages/BizProfile.js',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },
];