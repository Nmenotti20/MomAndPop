import React from 'react';
import "react-bootstrap"
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Footer.css";
import gitHubIcon from "../images/GitHub-Mark-Light-32px.png";
import igIcon from "../images/Instagram.png";
import  linkedIcon from "../images/LI-In-Bug.png"
import twitterIcon from "../images/twitter.png"

function Footer() {
    return (
      <div className="container">
        {/* <div className="d-flex justify-content-center h-100"> */}

          <footer id="footer">
            <div className="row">
              <div className="col-lg-12">
                <a
                  className="gitHub"
                  href="https://github.com/Nmenotti20/MomAndPop"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={gitHubIcon} alt="github icon" loading="lazy"></img>
                </a>
                <a
                  className="igIcon"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={igIcon} alt="instagram icon" loading="lazy"></img>
                </a>
                <a
                  className="linkedInIcon"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={linkedIcon} alt="LinkedIN icon" loading="lazy"></img>
                </a>
                <a
                  className="twitterIcon"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter icon" loading="lazy"></img>
                </a>
                <input></input><button>Subscribe</button>
              </div>
            </div>
          </footer>
        {/* </div> */}
      </div>
    );
}

export default Footer;
