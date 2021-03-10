import React from 'react';
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";



function NewUser() {
    return (
        <div className="container">
           <div className="d-flex justify-content-center h-100">
            <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaEnvelope /> </span>
                                </div>
                                <input type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaUnlock /> </span>
                                </div>
                                <input type="password" class="form-control" placeholder="password" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaUnlock /> </span>
                                </div>
                                <input type="password" class="form-control" placeholder="re-enter password" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn" />
                            </div>
                            <a href="./UserLogin.js" class="card-link">Login to you existing<br></br>User Account</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser;