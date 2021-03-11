import React, { useState, useEffect } from "react";
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import API from "../utils/API/businessAPI";

function BizLogin() {
  //setting our Components initial state
  const [formObject, setFormObject] = useState({});

  //handles updating component state when the user types login info into input field

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.login({
        username: formObject.username,
        password: formObject.password,
      })
        .then(function () {
          window.location.replace("/profile");
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
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaEnvelope />{" "}
                  </span>
                </div>
                <input
                  type="username"
                  name="username"
                  class="form-control"
                  placeholder="Username"
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
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                  onClick={handleFormSubmit}
                />
              </div>
              <a href="./NewUser.js" class="card-link">
                Create NEW<br></br>Business Owner Account
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default BizLogin;
