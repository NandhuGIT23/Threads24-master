import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import spaceTorchImage from "../images/space_torch.jpg";
import Navbar1 from "../components/Navbar1";
import UiuxImg from "../images/uiux2.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Uiux = () => {
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
        <h1 className="eventName welcometag text-light mx-5">UI/UX Design</h1>
        <p
          className="eventDesc mx-5 mb-5 text-light"
          // style={{ textAlign: "center", marginTop: "20px", color: "#E4A732" }}
        >
          {/* <FontAwesomeIcon icon={faClock} size="xs" className="mr-2" /> */}
          Embark on an exciting journey into the world of UI/UX design with our
          immersive workshop!
          <br />
          <strong>NOTE: Participants must bring their own laptop</strong>
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img
                  src={UiuxImg}
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
                Explore the core principles of crafting engaging user
                experiences (UI/UX) in our immersive workshop. From wireframing
                and prototyping to mastering design tools like Adobe XD or
                Figma, you'll gain practical skills to create intuitive and
                visually captivating interfaces. Whether you're new to UI/UX or
                aiming to refine your expertise, our workshop provides hands-on
                training and expert insights to propel your career in the
                dynamic realm of design. Secure your spot today and embark on
                your path to becoming a UI/UX design pro!
              </p>

              <h1 className="heads text-light">Agenda</h1>
              <ul className="text-light">
                <li>Introduction to UI/UX Design</li>
                <li>User Interface</li>
                <li>User Experience</li>
                <li>Figma</li>
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
                <li>Sanjay Raj G M: 9080781942</li>
                <li>Sripauldaniel L: 6380519953</li>
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
            knowledge in UI/UX designing. Reserve your spot now!
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
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Uiux;
