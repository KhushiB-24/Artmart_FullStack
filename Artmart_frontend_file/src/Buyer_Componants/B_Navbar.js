import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./B_Main.css";
import logo from "../Images/ArtMart_new.png";

const B_Navbar = () => {
  //Creating function to perform logout
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("userType"); 
    navigate("/"); //Navigate page to the pre-login page
    window.location.reload(); //Reload Page autiomatically
  }
  return (
    <>
      <div className="container-fluid main-nav">
        <div className="row">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
                        to="/b_home"
                        className="nav-link active"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/b_explore" className="nav-link">
                        Explore
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/b_about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link to="/b_contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/b_cart" className="nav-link">
                        <i class="bi bi-cart3 mx-2 fs-4"/>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/b_orders" className="nav-link">
                      <i class="bi bi-bag-check-fill mx-2 fs-4"/>
                      </Link>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
        <p className="text-end">Logged in as: {localStorage.getItem("name")}</p>
        </div>
      </div>
    </>
  );
};

export default B_Navbar;
