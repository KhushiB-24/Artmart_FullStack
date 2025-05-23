import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./S_Navbar.css";
import logo from "../Images/ArtMart_new.png";

const S_Navbar = () => {
  const navigate = useNavigate();
  //Creating function to perform logout
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
                        to="/s_dashboard"
                        className="nav-link"
                        aria-current="page"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item dropdown mx-3">
                      <Link
                        to="/s_manage_products"
                        className="nav-link"
                        aria-current="page"
                      >
                        Manage Products
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Paintings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sketches
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Canvas
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mx-3">
                      <Link
                        to="/s_orders"
                        className="nav-link"
                        aria-current="page"
                      >
                        Orders
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link
                        to="/s_earnings"
                        className="nav-link"
                        aria-current="page"
                      >
                        Earnings
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        <i className="bi bi-search mx-2 fs-4" />
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <Link to="/s_profile" className="nav-link">
                        <i className="bi bi-person-fill mx-2 fs-3" />
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
        <p className="text-end">Logged in as: {localStorage.getItem("userEmail")}</p>
        </div>
      </div>
    </>
  );
};

export default S_Navbar;
