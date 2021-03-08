import React from 'react';
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

function BizLogin() {
    return (
        <div>
        <div className="d-flex justify-content-center">
            <div className="card">
                <div className="card-header">
                    <h3>Login to Your<br></br>Business Owner Account</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FaEnvelope /> </span>
                            </div>
                            <input type="username" class="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FaUnlock /> </span>
                            </div>
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Login" className="btn float-right login_btn" />
                        </div>
                        <a href="./NewUser.js" class="card-link">Create NEW<br></br>Business Owner Account</a>
                    </form>
                </div>
            </div>
        </div>
        <div className="container">
        </div> 
    </div>
    )
}

export default BizLogin;