import React, { Component } from 'react';
 import './idexlo.css'
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
        <div className="title">Login in</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
            
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" required="" />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required="" />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required="" />
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
