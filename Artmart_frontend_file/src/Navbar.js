import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Images/ArtMart_new.png"

function Navbar() {
  return (
    <div>
      <div className="container-fluid main-nav">
        <div className="row">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <a className="navbar-brand mx-3" href="#">
                  <img src={logo} alt="logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item mx-3">
                      <Link
                        to="/"
                        className="nav-link"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/signup" className="nav-link">
                        SignUp
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/signin" className="nav-link">
                        SignIn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
