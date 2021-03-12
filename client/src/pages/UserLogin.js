import React, { useState, useContext } from "react";
import "./style.css";
import { FaUnlock } from "react-icons/fa";
import { FaUsers  } from "react-icons/fa";
import API from "../utils/API/userAPI";
import UserContext from "../utils/Context/UserContext";

function UserLogin() {
  const { changeUser } = useContext(UserContext);

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
    if (formObject.username && formObject.password) {
      API.login({
        username: formObject.username,
        password: formObject.password,
      })
        .then(function (res) {
            console.log(res)
          if (res.data.message === "Welcome!") {
            document.cookie = `token=${res.data.token};SameSite=Lax; Secure`;
            document.cookie = `loggedInAs=${res.loggedInAs}; SameSite=Lax; Secure`;
            changeUser(res.data.token, "user");
            setMessage({
              text: res.data.message,
              color: "success",
            })
            window.location.replace("/profile")
            } else if (res.data.message === "Email or password does not match") {
            setMessage({
              text: res.data.message,
              color: "danger",
            });
          }
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>
              Returning User<br></br>Sign In
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUsers   />{" "}
                  </span>
                </div>
                <input
                    name="username"
                  type="username"
                  classnName="form-control"
                  placeholder="User Name"
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
                name = "password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                />
                <div id="message" className={`text-${message.color}`}>
                  {message.text}
                </div>
              </div>
              <a href="./NewUser" className="card-link">
                Create NEW<br></br> User Account
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default UserLogin;
