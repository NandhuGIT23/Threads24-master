import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import spaceTorchImage from "../images/space_torch.jpg";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import act2 from "../images/act2.png";
import { Link } from "react-router-dom";

const Actlikethis = () => {
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
        <h1 className="eventName welcometag text-light mx-5">Sales Royal</h1>
        <p
          className="eventDesc mx-5 mb-5 text-light"
          // style={{ textAlign: "center", marginTop: "20px", color: "#E4A732" }}
        >
          {/* <FontAwesomeIcon icon={faClock} size="xs" className="mr-2" /> */}
          {/* Embark on an exciting journey into the world of UI/UX design with our
          immersive workshop! */}
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img
                  src={act2}
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
                Its a team of 2 members.
                <br />
                In Round 1, an advertisement will be played it should be found
                and enacted by one of the team member and the other should find
                it out in the given duration. This round is going to be a battle
                between 2 teams the winning team will be selected to Round 2.
                <br />
                In Round 2, for a given product you have to do an advertisement
                by acting within 2mins...
              </p>

              {/* <h1 className="heads text-light">Agenda</h1> */}
              <ul className="text-light">
                {/* <li>Introduction to UI/UX Design</li> */}
                {/* <li>Hands-on sessions on automation tools</li> */}
                {/* <li>Case studies and real-world applications</li> */}
              </ul>

              {/* <h1 className="heads text-light">Instructors</h1>
              <ul className="points text-light">
                <li>Updating soon</li>
                <li>Updating soon</li>
              </ul> */}

              <h1 className="heads text-light">Contact</h1>
              <ul className="points text-light">
                <li>Nandhini S: 95007 56296</li>
                <li>Pavitra P: 90253 82473</li>
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
      {/* <ComingSoon></ComingSoon> */}
      <Footer></Footer>
    </div>
  );
};

export default Actlikethis;
