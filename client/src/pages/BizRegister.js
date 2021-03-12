import React, { useState } from "react";
import "./style.css";
import { FaEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import API from "../utils/API/businessAPI";

function BizRegister() {
  //setting our Components initial state
  const [formObject, setFormObject] = useState({});
  const [message, setMessage] = useState({
      text: "",
      color: ""
  })

  //handles updating component state when the user types login info into input field

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject)
    if (formObject.email && formObject.password && formObject.password === formObject.confirmPassword && formObject.firstName && formObject.lastName && formObject.companyName && formObject.service && formObject.streetAddress && formObject.city && formObject.state && formObject.zipCode && formObject.phone) {
      API.register(formObject)
        .then(function (res) {
          console.log(res)
          if (res.data.message === "You registered successfully!") {
              setMessage({
                  text: res.data.message,
                  color: 'success'
              })
              window.location.replace('/businesslogin')
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
    <div>
      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="card-header">
            <h3>
              Register Your<br></br>Business Owner Account
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
                  placeholder="New Password"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUnlock />{" "}
                  </span>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Re-enter Password"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-signature"></i>{" "}
                  </span>
                </div>
                <input
                  type="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="Owner's First Name"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-signature"></i>{" "}
                  </span>
                </div>
                <input
                  type="lastName"
                  name="lastName"
                  className="form-control"
                  placeholder="Owner's Last Name"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-building"></i>{" "}
                  </span>
                </div>
                <input
                  type="companyName"
                  name="companyName"
                  className="form-control"
                  placeholder="Company Name"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-concierge-bell"></i>{" "}
                  </span>
                </div>
                <input
                  type="service"
                  name="service"
                  className="form-control"
                  placeholder="Service (e.g. Mexican Food)"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-phone"></i>{" "}
                  </span>
                </div>
                <input
                  type="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-wifi"></i>{" "}
                  </span>
                </div>
                <input
                  type="website"
                  name="website"
                  className="form-control"
                  placeholder="Website (if applicable)"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-address-book"></i>{" "}
                  </span>
                </div>
                <input
                  type="streetAddress"
                  name="streetAddress"
                  className="form-control"
                  placeholder="Street Address"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-city"></i>{" "}
                  </span>
                </div>
                <input
                  type="city"
                  name="city"
                  className="form-control"
                  placeholder="City"
                  onChange={handleLoginChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-flag-usa"></i>{" "}
                  </span>
                </div>
                    
                    <select
                        class="form-control"
                        name="state"
                        type="state"
                        onChange={handleLoginChange}
                    >
                        <option value="">State</option>
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </select>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-map-marked"></i>{" "}
                  </span>
                </div>
                <input
                  type="zipCode"
                  name="zipCode"
                  className="form-control"
                  placeholder="Zip Code"
                  onChange={handleLoginChange}
                />
              </div>

              <div className="form-group d-flex flex-column align-items-end">
                <input
                  type="submit"
                  value="Register"
                  className="btn login_btn"
                  onClick={handleFormSubmit}
                />
                <div id="error-message" className={`text-${message.color}`}>
                    {message.text}
                </div>
              </div>
              <div>
                Already have a business acount? <br/>
                <a href="./businesslogin" className="card-link text-primary">
                  <u>
                    Sign In Here
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

export default BizRegister;