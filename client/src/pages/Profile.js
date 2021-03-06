import React from 'react';
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import Shopper from '../images/Shopper_img.png';

function Profile() {
    return (
        <div classNameName="container">
            <div className="d-flex justify-content-center h-100">
                    <div className="card2 mb-3">
                        <img src={Shopper} className="card-img-top" alt="photo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Shopper Profile</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="form-group">
                                <input type="submit" value="Edit Profile" className="btn float-right login_btn" />
                            </div>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Profile;