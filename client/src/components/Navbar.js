import React from 'react';
import Logo from '../images/Accord_Logo.png';
import { Link } from "react-router-dom";
import styles from "./Navbar.css";



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
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>

                        <Link to="profile">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                        </Link>
                        <Link to="/settings">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Settings</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
