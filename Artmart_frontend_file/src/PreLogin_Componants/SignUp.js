import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    usertype: "",
  });

  //This code is for the handle change of input field when we write something
  let handleChange = (e) => {
    var { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //This code for the handle submit and store info in the database
  const [res, setRes] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", user)
      .then(() => {
        setRes("Added successfully");
        navigate("/signin");
      })
      .catch(() => {
        setRes("Something wents wrong");
      });
  };

  return (
    <div className="signup-page">
      <div className="container-fluid" id="details">
        <div className="row text-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <p style={{ fontSize: 40 }}>
              Let's Create{" "}
              {
                <span style={{ color: "#4DA1A9", fontWeight: 700 }}>
                  Your
                  <br />
                  Account
                </span>
              }
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col col-12 col-sm-12 col-md-12 col-lg-12"
            id="sign-form"
          >
            <div className="row">
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="Name">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Ex.John Doe"
                  aria-label="Your Name"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="Phone">Phone</label>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  aria-label="Phone"
                  required=""
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6">
                <label htmlFor="Email">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  aria-label="Email"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6">
                <label>Select User Type:</label>
                <div className="user-types">
                  <div className="user-choice">
                    <input
                      type="radio"
                      name="usertype"
                      value="Buyer"
                      checked={user.usertype === "Buyer"}
                      onChange={handleChange}
                    />
                    <label>Buyer</label>
                  </div>
                  <div className="user-choice">
                    <input
                      type="radio"
                      name="usertype"
                      value="Seller"
                      checked={user.usertype === "Seller"}
                      onChange={handleChange}
                    />
                    <label>Seller</label>
                  </div>

                  {/* <div className="user-choice">
                  <input
                      type="radio"
                      name="usertype"
                      value="Admin"
                      checked={user.usertype === "Admin"}
                      onChange={handleChange}
                    />
                    <label>Admin</label>
                  </div> */}
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-12">
                <label htmlFor="Interest">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  required=""
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <p>Already have an account? <Link to="/signin" className="link" aria-current="page">
                    Signin
                  </Link></p>
              </div>
            </div>
            <p>{res}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
