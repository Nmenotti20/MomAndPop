import React from 'react';
import "react-bootstrap"

import "./Footer.css";
import gitHubIcon from "../images/GitHub-Mark-Light-32px.png";
import igIcon from "../images/Instagram.png";
import  linkedIcon from "../images/LI-In-Bug.png"
import twitterIcon from "../images/twitter.png"

function Footer() {
    return (
      
        

          <footer id="footer">
            <div className="row">
              <div>
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
                <br></br>
                <input></input><button>Subscribe</button>
              </div>
            </div>
          </footer>
       
      
    );
}

export default Footer;
