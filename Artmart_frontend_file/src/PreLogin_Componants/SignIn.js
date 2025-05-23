import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [r, setR] = useState("");
  const [usertype, setUserType] = useState("");

  var handleChange = (e) => {
    setEmail(e.target.value);
  };

  var handleChange2 = (e) => {
    setPassword(e.target.value);
  };

  let handleChange3 = (e) => {
    setUserType(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !usertype) {
      alert("Please fill all the fields and select user type.");
      return;
    }

    axios
      .post("http://localhost:8080/users/signin", {
        email,
        password,
        usertype,
      })
      .then((r) => {
        console.log("Response from backend:", r.data);

  if (r.data === "Login Successfully!") {
    localStorage.setItem("buyer", JSON.stringify(r.data));
    localStorage.setItem("userType", usertype);
    localStorage.setItem("userEmail", email);
          if (usertype === "Buyer") {
            navigate("/b_home");
          } else if (usertype === "Seller") {
            navigate("/s_dashboard");
          } 
          
          window.location.reload(); // refresh UI after login
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed!");
      });
  };
  return (
    <div className="signin-page">
      <div className="container" id="details">
        <div className="row text-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <p style={{ fontSize: 40 }}>
              Let's Login into{" "}
              <span style={{ color: "#4DA1A9", fontWeight: 700 }}>
                Your
                <br />
                Account
              </span>
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col col-12 col-sm-12 col-md-12 col-lg-12"
            id="sign-form"
          >
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
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
            </div>
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-12">
                <label htmlFor="Password">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="Password"
                  required=""
                  onChange={handleChange2}
                />
              </div>
            </div>

            <label>Select User Type:</label>
            <div>
              <div className="user-choice">
                <input
                  type="radio"
                  name="usertype"
                  value="Buyer"
                  checked={usertype === "Buyer"}
                  onChange={handleChange3}
                />
                <label>Buyer</label>
              </div>

              <div className="user-choice">
                <input
                  type="radio"
                  name="usertype"
                  value="Seller"
                  checked={usertype === "Seller"}
                  onChange={handleChange3}
                />
                <label>Seller</label>
              </div>
              {/* <div className="user-choice">
                  <input
                    type="radio"
                    name="usertype"
                    value="Admin"
                    checked={t === "Admin"}
                    onChange={handleChange3}
                  />
                  <label>Admin</label>
                </div> */}
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
                <p>
                  Don't have any account?{" "}
                  <Link to="/signup" className="link" aria-current="page">
                    SignUp
                  </Link>
                </p>
              </div>
            </div>
            <p>{r}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
