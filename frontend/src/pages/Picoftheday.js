import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import spaceTorchImage from "../images/space_torch.jpg";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import camera from "../images/camera.png";
import { Link } from "react-router-dom";

const Picoftheday = () => {
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
        <h1 className="eventName welcometag text-light mx-5">PIC OF THE DAY</h1>
        <p
          className="eventDesc mx-5 mb-5 text-light"
          // style={{ textAlign: "center", marginTop: "20px", color: "#E4A732" }}
        >
          {/* <FontAwesomeIcon icon={faClock} size="xs" className="mr-2" /> */}
          {/* Embark on an exciting journey into the world of UI/UX design with
          our immersive workshop! */}
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img
                  src={camera}
                  alt="RPA Workshop"
                  className="img-fluid rounded  mx-auto d-block"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="details text-center">
                {/* <FontAwesomeIcon icon={faClock} className="mr-2" /> */}
                <p className="detailsTxt text-light">
                  Date: 24/02/2023, Time: 10AM - 4PM
                </p>
              </div>
              <div className="details text-center">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> */}
                <p className="detailsTxt text-light">Location: Updating soon</p>
              </div>
            </Col>
            <Col md={6}>
              <h1 className="heads text-light">About the Event</h1>
              <p className="points text-light">
                Get ready to showcase your photography skills in our exciting
                "Pic Of The Day" event happening right here in the heart of our
                college campus. <br />
                All photos must be taken within our campus.
                <br />
                This event is exclusively for individual participants.
                <br /> First and second round we'll provide themes based that
                you have to click your picture. <br />
                First Round Submit your best shots to qualify for the second
                round. <br />
                In Second round judges will announce winners
              </p>

              {/* <h1 className="heads text-light">Agenda</h1> */}
              <ul className="text-light">
                {/* <li>Introduction to UI/UX Design</li> */}
                {/* <li>Hands-on sessions on automation tools</li> */}
                {/* <li>Case studies and real-world applications</li> */}
              </ul>

              {/* <h1 className="heads text-light">Instructors</h1>
              <ul className="points text-light">
                <li>Akash L: </li>
                <li>Updating soon</li>
              </ul> */}

              <h1 className="heads text-light">Contact</h1>
              <ul className="points text-light">
                <li> Sooraj 9025349046</li>
                <li> Abishek N 9360518517</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div
          className="bottom text-center mt-1 pt-2 pb-5"
          style={{ width: "100%" }}
        >
          <br />
          {/* <p className="bottomTxt text-light">
            Don't miss out on this opportunity to enhance your skills and
            knowledge in Flutter development. Reserve your spot now!
          </p> */}
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
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Picoftheday;
