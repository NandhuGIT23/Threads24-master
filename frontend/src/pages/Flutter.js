import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import spaceTorchImage from "../images/space_torch.jpg";
import Navbar1 from "../components/Navbar1";
import FlutterImg from "../images/flutter2.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Flutter = () => {
  return (
    <div
      className="section4"
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${spaceTorchImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar1 />
      <Container fluid style={{ backgroundColor: "rgb(9,9,9,0.3)" }}>
        <h1 className="eventName welcometag text-light mx-5">Flutter</h1>
        <p
          className="eventDesc mx-5 mb-5 text-light"
          // style={{ textAlign: "center", marginTop: "20px", color: "#E4A732" }}
        >
          {/* <FontAwesomeIcon icon={faClock} size="xs" className="mr-2" /> */}
          Embark on an exciting journey into the world of flutter development
          with our immersive workshop!
          <br />
          <strong>NOTE: Participants must bring their own data cable</strong>
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img
                  src={FlutterImg}
                  alt="RPA Workshop"
                  className="img-fluid rounded  mx-auto d-block"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="details text-center">
                {/* <FontAwesomeIcon icon={faClock} className="mr-2" /> */}
                <p className="detailsTxt text-light">
                  Date: 23/02/2023, Time: 10AM - 4PM
                </p>
              </div>
              <div className="details text-center">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> */}
                <p className="detailsTxt text-light">Location: Updating soon</p>
              </div>
            </Col>
            <Col md={6}>
              <h1 className="heads text-light">About the Workshop</h1>
              <p className="points text-light">
                If you're eager to learn new skills or delve into the exciting
                world of development, look no further than our workshop! Join us
                as we journey into the realm of Flutter. Whether you're a
                newcomer or seasoned enthusiast, you're the vital ingredient in
                our mix. Our workshop is designed to provide a comprehensive
                overview of Flutter's functionality, its significance, and its
                user-friendly nature. Imagine Flutter as your digital
                paintbrush, effortlessly crafting beautiful and interactive user
                interfaces. So, are you ready to immerse yourself in our vibrant
                Flutter community and mingle with like-minded individuals?
              </p>

              <h1 className="heads text-light">Agenda</h1>
              <ul className="text-light">
                <li>Introduction to Flutter and Dart</li>
                <li>Flutter Basics: Widgets and Layouts</li>
                <li>State Management in Flutter</li>
                <li>Working with APIs and Services</li>
                <li>Advanced Flutter Concepts</li>
              </ul>

              {/* <h1 className="heads text-light">Instructors</h1>
              <ul className="points text-light">
                <li>Updating soon</li>
                <li>Updating soon</li>
              </ul> */}

              <h1 className="heads text-light">Contact</h1>
              <ul className="points text-light">
                <li>Dhanush G: 6382583800</li>
                <li>Nandhana B : 9363394909</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div
          className="bottom text-center mt-1 pt-2 pb-5"
          style={{ width: "100%" }}
        >
          <br />
          <p className="bottomTxt text-light">
            Don't miss out on this opportunity to enhance your skills and
            knowledge in Flutter development. Reserve your spot now!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link className="register_btn btn2" to="/register">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Register NOW
            </Link>
          </div>
        </div>

        {/* <div className="footer container-fluid bg-dark text-white pt-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center">
              <h1 className="footerHeadTxt">THREADS'24</h1>
              <p className="footerDesc">
                A National Level Technical symposium hosted by the Department of
                Computer Science and Engineering in Sona College of Technology,
                Salem. It provides a platform to showcase the talents of student
                enthusiasts in various fields of computer science.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="footerLinksHead">Connect with Us</h3>
              <a
                href="https://instagram.com/sonathreads?igshid=OTJlNzQ0NWM="
                className="footerLink"
              >
                Instagram: @sonathreads
              </a>
              <p className="footerLink">Email: threads.cse@sonatech.ac.in</p>
            </div>
          </div>

          <hr className="line line2" />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <p className="copyRight">
                © 2024 Threads'24. All Rights Reserved.
              </p>
            </div>
          </div>
        </div> */}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Flutter;
