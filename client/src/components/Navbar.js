import React from 'react';
import Logo from '../images/Accord_Logo.png';
import { Link } from "react-router-dom";
import styles from "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img className="logo" src={Logo} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><FaHome className="icon" /> Home</a>
                            </li>
                        </Link>

                        <Link to="profile">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><FaUser className="icon" /> Profile</a>
                            </li>
                        </Link>
                        <Link to="/settings">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><FaCog className="icon" />Settings</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
