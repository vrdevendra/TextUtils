import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.themeMode} bg-${props.themeMode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          {props.title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                {props.contactUs}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                {props.aboutUs}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TextForm">
                {props.textForm}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form> */}
        </div>
        <div className={`form-check form-switch text-${props.themeMode==='dark'?'light':'dark'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleThemeMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string,
  practice: PropTypes.string,
};

// Specifies the default values for props:
Navbar.defaultProps = {
  title: "Set title here",
  aboutUs: "Set about us here",
  practice: "Set practice here",
};
