import React from "react";
import { useState, useEffect } from "react";
import { Navbar1 } from "./Navbar1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import codeclash from "../images/codeclash.png";
import paperPresentation from "../images/paperPresentation.png";
import mismatch from "../images/mismatch.png";
import quizholic from "../images/quizholic.png";
import treassure from "../images/treassure.png";
import ctf from "../images/ctf.png";
import karoke from "../images/karoke2.png";
import techquiz from "../images/techquiz.png";
import act2 from "../images/act2.png";
import camera from "../images/camera.png";

function Events() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = './images/space_torch.jpg'; // Replace with the URL of your background image
    img.onload = () => {
      document.querySelector('.landingpage').style.backgroundImage = `url('${img.src}')`;
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="whole">
      <section style={{ zIndex: "0" }} className="stars">
        <span className="star1"></span>
        <span className="star2"></span>
      </section>
      <Navbar1 />
      <div className="section3">
        <div className="container mb-5 ">
          <div className="">
            <p className="text-light h3 mt-3">Events</p>
            <p className="text-light ">
              Don't miss out on one of the most exciting events that you will
              ever experience. Get ready to be excited and enhanced.
            </p>
            <p className="text-light">
              Note: Click on the tiles to know more about the events
            </p>
            <div className="d-flex justify-content-center my-3">
              <a className="register_btn" href="/register" target="_blank">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Register NOW
              </a>
            </div>
            <p className="text-light h3 mt-3">Technical Events</p>

            <div>
              <hr style={{ color: "white" }} />
            </div>
            <div className="row  d-flex justify-content-around ">
              <Link
                onClick={scrollToTop}
                to="/Codeclash"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ alignItems: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Code Clash
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={codeclash}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/Paperpresentation"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center", fontSize: "1.3em" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Paper Presentation
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={paperPresentation}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/Codequill"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Code Quill Quiz
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={techquiz}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/Captureflag"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Capture the Flag
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={ctf}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/Digitaljunction"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Digital Junction
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={mismatch}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>

              <p className="text-light h3 mt-3">Non-Technical Events</p>
              <Link
                onClick={scrollToTop}
                to="/Quizfesta"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Quiz Festa
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={quizholic}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/actlikethis"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center", fontSize: "1.3em" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Act Like This
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={act2}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/Treasurehunt"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Treasure Hunt
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={treassure}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/Picoftheday"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5
                        style={{ textAlign: "center" }}
                        className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                      >
                        Pic Of The Day
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={camera}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                onClick={scrollToTop}
                to="/Karaoke"
                className="col-5 col-md-2 my-2 rounded-border hover"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <div className="card bg-transparent card3">
                    <div className="card-body bg-transparent">
                      <h5 className="card-title text-light d-flex justify-content-center btn-text-gradient--gold">
                        Karaoke
                      </h5>
                      <img
                        className="d-flex justify-content-center"
                        src={karoke}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Events;
