import React from "react";
import { useState, useEffect } from "react";
import { Navbar1 } from "./Navbar1";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import uiux from "../images/uiux2.png";
import cybersecurity from "../images/Cybersecurity2.png";
import flutter from "../images/flutter2.png";
import webdev from "../images/webdev2.png";

function Workshops() {
  // useEffect(() => {
  //   const img = new Image();
  //   img.src = './images/space_torch.jpg'; // Replace with the URL of your background image
  //   img.onload = () => {
  //     document.querySelector('.landingpage').style.backgroundImage = `url('${img.src}')`;
  //   };
  // }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="whole">
      <section style={{ zIndex: "0" }} className="stars">
        <span className="star1"></span>
        <span className="star2"></span>
      </section>
      <Navbar1 />
      <div className="section3">
        <div className="container ">
          <div className="">
            <p className="text-light h3 mt-3">WORKSHOPS</p>
            <p className="text-light ">
              Workshop allows participants to learn new techniques, improve
              their skills, and gain practical knowledge in a specific area of
              interest. During the workshop, the expert will typically lead the
              participants through a series of activities or demonstrations,
              providing instruction and feedback along the way.
              <br />
              <strong>Date: 23.02.2024</strong>
            </p>
            <div className="d-flex justify-content-center my-3">
              <Link className="register_btn btn2" to="/register">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Register NOW
              </Link>
            </div>
            <div>
              <hr style={{ color: "white" }} />
              <p className="text-light">
                Note: Click on the card to know more about the workshop
              </p>
            </div>
            <div className="row d-flex justify-content-around">
              <Link
                to="/uiux"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent card3">
                      <h4
                        style={{ textAlign: "center", fontSize: "1.2em" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        UI/UX
                      </h4>
                      <img
                        className="d-flex justify-content-center"
                        src={uiux}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
                to="/flutter"
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent card3">
                      <h4
                        style={{ fontSize: "1.3em" }}
                        className="card-title text-light mb-4 d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Flutter
                      </h4>
                      <img
                        className="d-flex justify-content-center"
                        src={flutter}
                        style={{ width: "120%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/cyber_security"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent card3">
                      <h4
                        style={{ textAlign: "center", fontSize: "1.2em" }}
                        className="card-title text-light d-flex  justify-content-center btn-text-gradient--gold"
                      >
                        Cyber Security
                      </h4>
                      <img
                        className="d-flex justify-content-center"
                        src={cybersecurity}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
                to="/web_dev"
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent card3">
                      <h4
                        style={{ textAlign: "center", fontSize: "1.2em" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Web Development
                      </h4>
                      <img
                        className="d-flex justify-content-center"
                        src={webdev}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <hr style={{ color: "white" }} />
              <p className="text-light">
                Participants will have the opportunity to ask questions, share
                their own experiences, and engage with the material in a
                collaborative and interactive setting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Workshops;
