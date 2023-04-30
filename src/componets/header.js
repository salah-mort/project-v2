import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        {/* Top Header Start */}
        <div className="top-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3">
                <div className="logo">
                  <a href="">
                    <img src="img/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-2">
                <div className="social">
                  <a href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            
            </div>
          </div>
        </div>

        {/* Top Header End */}

        {/* Header Start */}
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                MENU
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav m-auto">
                <NavLink to="/" className="nav-item nav-link ">
          Home
        </NavLink>
                  <a href="#" className="nav-item nav-link">
                    Sports
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Tech
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Fashion
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Dropdown
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        Sub Item 1
                      </a>
                      <a href="#" className="dropdown-item">
                        Sub Item 2
                      </a>
                    </div>
                  </div>
                  <NavLink to="/singleNews" className="nav-item nav-link ">
                  Single Page
        </NavLink>
                  <NavLink to="/contact" className="nav-item nav-link">
          Contact
        </NavLink>


        <div className="col-lg-1 col-md-6">
                <div className="login">
                  <button>
                  <Link to='/login' className="nav-item nav-link">
          Login
        </Link>
                  </button>
                </div>
              </div>
              <div className="col-lg-2 col-md-0">
              <div className="login">
                <button>
                <Link to='/sign' className="nav-item nav-link">
          SignUp
        </Link>
                </button>
                </div>
              </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Header End */}
      </>
    );
  }
}

export default Header;
