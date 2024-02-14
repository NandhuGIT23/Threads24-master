import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import threadslogo from "../images/threadslogo.svg";

const Footer = () => {
  return (
    <div className="footer container-fluid py-5 text-white ">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img
            src={threadslogo}
            alt="logo"
            className="logo footerLogo footerImg"
          />
          <p className="m-2" style={{ fontSize: "2em" }}>
            THREADS'24
          </p>
        </div>
      </div>
      <hr />
      <div className="footerHead text-center">
      </div>
      <p className="footerDesc text-center">
        A National Level Technical symposium hosted by the Department of
        Computer Science and Engineering in Sona College of Technology, Salem.
        It provides a dias to exhibit the talents of the student enthusiasts of
        numerous facets of computer science
      </p>

      <hr className="line line2" />

      <div className="footerLinks text-center row">
        <div className="col-6">
          <p style={{ fontSize: "12px" }}>Sona.cse.sympo@gmail.com</p>
        </div>
        <div className="col-6">
          {" "}
          {/* <i class="bi bi-instagram"></i> */}
          <p style={{ fontSize: "12px" }}>
            <a
              href="https://instagram.com/sonathreads?igshid=OTJlNzQ0NWM="
              className="d-flex align-items-center justify-content-center text-center"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              sonathreads
            </a>
          </p>
        </div>
      </div>

      <hr className="line line2" />
    </div>
  );
};

export default Footer;
