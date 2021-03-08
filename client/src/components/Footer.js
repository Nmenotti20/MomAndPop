import React from 'react';
import "react-bootstrap"
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Footer.css";
import gitHubIcon from "../images/GitHub-Mark-Light-32px.png";
import igIcon from "../images/Instagram.png";
import  linkedIcon from "../images/LI-In-Bug.png"
import twitterIcon from "../images/twitter.jpg"

function Footer() {
    return (
      <footer id="footer">
        <div className="row">
          <div className="col-lg-12">
            <a
              className="gitHub"
              href="https://github.com/Jruuuu"
              target="_blank"
              rel="noopener noreferrer">
              <img src={gitHubIcon} alt="github icon" loading="lazy"></img>
            </a>
            <a
              className="igIcon"
              href=""
              target="_blank"
              rel="noopener noreferrer">
              <img src={igIcon} alt="instagram icon" loading="lazy"></img>
            </a>
            <a
              className="linkedInIcon"
              href=""
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedIcon} alt="LinkedIN icon" loading="lazy"></img>
            </a>
            <a
              className="twitterIcon"
              href=""
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter icon" loading="lazy"></img>
            </a>
            <input></input><button>Subscribe</button>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
