import React, { Component } from "react";
import "./idex.css";
class MainLogin extends Component {
  render() {
    return (
    <>
  {/* Created By CodingLab - www.codinglabweb.com */}
  <meta charSet="UTF-8" />
  {/*-<title> Responsive Registration Form | CodingLab </title>-*/}
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required="" />
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required="" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required="" />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required="" />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required="" />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input
              type="text"
              placeholder="Confirm your password"
              required=""
            />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one" />
              <span className="gender">Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two" />
              <span className="gender">Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three" />
              <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" defaultValue="Register" />
        </div>
      </form>
    </div>
  </div>
</>

    );
  }
}

export default MainLogin;
