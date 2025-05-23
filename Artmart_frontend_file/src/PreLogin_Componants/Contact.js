import React from "react";
import B_Home from "../Buyer_Componants/B_Home";
import "./Contact.css"
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="container-fluid" id="contact-all">
        <div className="row text-center" id="contact-head">
          <h1>
            Contact Us
          </h1>
        </div>

        <form className="row" id="contact-form">
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex.John Doe"
                aria-label="First name"
                required=""
              />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
                aria-label="Last name"
                required=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor="Phone">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                aria-label="First name"
                required=""
              />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor="Interest">I'm Interested in</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                required=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="Country">Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                aria-label="Country"
                required=""
              />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="State">State</label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                aria-label="State"
                required=""
              />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-4">
              <label htmlFor="City">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                aria-label="Last name"
                required=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor="Message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={6}
                placeholder="Enter here"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>

        <Footer/>
      </div>
    </div>
  );
}

export default Contact;
