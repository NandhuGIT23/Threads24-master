import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import spaceTorchImage from "../images/space_torch.jpg";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import karoke from "../images/karoke2.png";
import { Link } from "react-router-dom";

const Karaoke = () => {
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
        <h1 className="eventName welcometag text-light mx-5">KARAOKE</h1>
        <p
          className="eventDesc mx-5 mb-5 text-light"
          // style={{ textAlign: "center", marginTop: "20px", color: "#E4A732" }}
        >
          {/* <FontAwesomeIcon icon={faClock} size="xs" className="mr-2" /> */}
          {/* Embark on an exciting journey into the world of UI/UX design with our */}
          {/* immersive workshop! */}
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img
                  src={karoke}
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
                Karaoke consists of two rounds.
                <br /> In the first round, students can participate as
                individual or as a team and must find the song that is being
                played.
                <br /> Teams selected in the first round must sing a song of
                their choice in the second round(Individual).
              </p>

              {/* <h1 className="heads text-light">Agenda</h1> */}
              {/* <ul className="text-light"> */}
              {/* <li>Introduction to UI/UX Design</li> */}
              {/* <li>Hands-on sessions on automation tools</li> */}
              {/* <li>Case studies and real-world applications</li> */}
              {/* </ul> */}

              {/* <h1 className="heads text-light">Instructors</h1>
              <ul className="points text-light">
                <li>Updating soon</li>
                <li>Updating soon</li>
              </ul> */}

              <h1 className="heads text-light">Contact</h1>
              <ul className="points text-light">
                <li>Ilakiya S +91 94880 72020</li>
                <li>R.K vishal +91 93455 80148</li>
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
            Don't miss out on this opportunity to showcase your skills and
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

export default Karaoke;
