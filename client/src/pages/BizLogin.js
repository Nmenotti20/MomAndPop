import React, { useState, useContext } from "react";
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import API from "../utils/API/businessAPI";
import UserContext from '../utils/Context/UserContext';

function BizLogin() {
  const { changeUser } = useContext(UserContext);
  //setting our Components initial state
  const [formObject, setFormObject] = useState({});
  const [message, setMessage] = useState({
    text: "",
    color: ""
  });


  //handles updating component state when the user types login info into input field

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.login({
        email: formObject.email,
        password: formObject.password,
      })
        .then(function (res) {
          if (res.data.message === "Welcome!") {
            document.cookie = `token=${res.data.token}; SameSite=Lax; Secure`;
            document.cookie = `loggedInAs=${res.data.loggedInAs}; SameSite=Lax; Secure`;
            document.cookie = `name=${res.data.name}; SameSite=Lax; Secure`;
            changeUser(res.data.token, 'business', res.data.name)
            setMessage({
              text: res.data.message,
              color: 'success'
            })
            window.location.replace('/businessprofile')
          } else if (res.data.message === "Email or password does not match") {
            setMessage({
              text: res.data.message,
              color: 'danger'
            })
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="card-header">
            <h3>
              Login to Your<br></br>Business Owner Account
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaEnvelope />{" "}
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUnlock />{" "}
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
              </div>

              <div className="form-group d-flex flex-column align-items-end">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                />
                <div id="message" className={`text-${message.color}`}>
                  {message.text}
                </div>
              </div>
              <div>
                Don't have a business acount? <br/>
                <a href="./businessregister" className="card-link text-primary">
                  <u>
                    Register Here
                  </u>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default BizLogin;
