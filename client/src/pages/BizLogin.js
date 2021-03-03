import React from 'react';
import "./style.css";
import * as FaIcons from 'react-icons/fa';



function BizLogin() {
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
                                    <span className="input-group-text"><FaIcons.FaBuilding /> </span>
                                </div>
                                <input type="Business Name" class="form-control" placeholder="Enter the name of your business here." />
                            </div>

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaIcons.FaEnvelope /> </span>
                                </div>
                                <input type="email" class="form-control" placeholder="email" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaIcons.FaUnlock /> </span>
                                </div>
                                <input type="password" class="form-control" placeholder="password" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaIcons.FaUnlock /> </span>
                                </div>
                                <input type="password" class="form-control" placeholder="re-enter password" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FaIcons.FaAddressBook /> </span>
                                </div>
                                <input type="Website" class="form-control" placeholder="Enter the web address of your business here." />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BizLogin;