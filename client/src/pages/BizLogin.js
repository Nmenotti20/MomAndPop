import React from 'react';
import "./style.css";
import * as FaIcons from 'react-icons/fa';



function BizLogin() {
    return (
        
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Login to your <br></br>Buisiness Owner Account</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaIcons.FaEnvelope /> </span>
                                </div>
                                <input type="Username" class="form-control" placeholder="Username" />
                            </div>

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaIcons.FaUnlock /> </span>
                                </div>
                                <input type="password" class="form-control" placeholder="password" />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn" />
                            </div>
                            <a href="./BizOwnAcct.js" class="card-link">Create NEW<br></br> Business Owner Account</a>
                        </form>
                    </div>
                </div>
                <div className="container">
            </div>

        </div>
    )
}

export default BizLogin;