import React from 'react';
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import BusinessOwner from '../images/Petersons_Donughts_Img.png';

function BizProfile() {
    return (

        <div classNameName="container">
            <div className="d-flex justify-content-center h-100">
                    <div className="card2 mb-3">
                        <img src={BusinessOwner} className="card-img-top" alt="photo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Business Name</h5>
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

export default BizProfile;