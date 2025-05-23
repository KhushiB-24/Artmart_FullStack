import React from "react";

function Footer() {
  return (
      <footer className=" container-fluid" id="all-footer">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 text-center">
            <i className="bi bi-telephone-fill" />
            <br />
            <i className="bi bi-envelope-at-fill" />
            <br />
            <i className="bi bi-geo-alt-fill" />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 text-left">
            <label htmlFor="myphone">7397951576</label>
            <br />
            <label htmlFor="email">khushibambodkar2404@gmail.com</label>
            <br />
            <label htmlFor="address">
              Nagpur-440027, Maharashtra, India
            </label>
          </div>
        </div>
        <div className="text-center pt-4">
            <div className="row d-inline justify-content-between">
            <a className="inline-block " href="https://www.instagram.com/escape_dellustrator/"><i className="bi bi-instagram"></i></a>
            <a className="inline-block " href="#"><i className="bi bi-facebook"></i></a>
            <a className="inline-block " href="#"><i className="bi bi-twitter"></i></a>
            <a className="inline-block " href="#"><i className="bi bi-linkedin"></i></a>
            </div>
        </div>
        <div className="row mx-auto px-4 pt-4 text-center">
          <p>&copy; 2025 ArtMart. All rights reserved.</p>
          <div className="">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
