import React , { useState, useContext }from "react";
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaUsers  } from "react-icons/fa";
import { FaSignature  } from "react-icons/fa";

import API from "../utils/API/userAPI";
import UserContext from '../utils/Context/UserContext';

function NewUser() {


  //setting our Components initial state
  const [formObject, setFormObject] = useState({});
  const [message, setMessage] = useState({
    text: "",
    color: ""
  });



  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject)
    if (formObject.username && formObject.email && formObject.password && formObject.password === formObject.confirmPassword) {
      API.register(formObject)
        .then(function (res) {
          console.log(res)
          if (res.data.message === "You registered successfully!") {
              setMessage({
                  text: res.data.message,
                  color: 'success'
              })
              window.location.replace('/UserLogin')
          } else if (res.data.message === "This email already has an account") {
              setMessage({
                  text: res.data.message,
                  color: 'danger'
              })
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
        console.log('it doesnt work')
    }
  }




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
                  <span className="input-group-text">
                    <FaUsers />{" "}
                  </span>
                </div>
                <input
                  type="username"
                  name="username"
                  className="form-control"
                  placeholder="User Name"
                  onChange={handleLoginChange}
                />
              </div>
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
                  placeholder="email"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaSignature />{" "}
                  </span>
                </div>
                <input
                  type="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaSignature />{" "}
                  </span>
                </div>
                <input
                  type="lastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
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
                  class="form-control"
                  placeholder="password"
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
                  name="confirmPassword"
                  class="form-control"
                  placeholder="re-enter password"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Register"
                  className="btn float-right login_btn"
                  onClick={handleFormSubmit}
                />
                <div id="error-message" className={`text-${message.color}`}>
                    {message.text}
                </div>
              </div>
              <a href="./UserLogin" class="card-link">
                Login to you existing<br></br>User Account
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
