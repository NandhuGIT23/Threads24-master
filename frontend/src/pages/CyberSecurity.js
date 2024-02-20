import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import spaceTorchImage from "../images/space_torch.jpg";
import Navbar1 from "../components/Navbar1";
import CyberSecurityImg from "../images/Cybersecurity2.png";
import Footer from "../components/Footer";

const CyberSecurity = () => {
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
        <h1 className="eventName welcometag text-light mx-5">Cyber Security</h1>
        <p
          className="eventDesc mx-5 mb-5 text-light"
          // style={{ textAlign: "center", marginTop: "20px", color: "#E4A732" }}
        >
          {/* <FontAwesomeIcon icon={faClock} size="xs" className="mr-2" /> */}
          Unlock the secrets of cybersecurity with our immersive workshop! Join
          us to delve into the world of cyber defense strategies and threat
          mitigation techniques. Learn how to safeguard systems, detect
          vulnerabilities, and fortify your digital assets against evolving
          threats. Don't miss this opportunity to enhance your cybersecurity
          skills and protect what matters most. Reserve your spot today!
          <br />
          
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img
                  src={CyberSecurityImg}
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
                Cybersecurity is more critical than ever, and our workshop is
                your gateway to mastering its essentials! Dive into the
                intricacies of safeguarding digital assets, understanding threat
                landscapes, and implementing robust defense strategies. From
                encryption to incident response, join us to elevate your
                cybersecurity prowess and stay ahead of evolving threats.
                Reserve your seat now and embark on a journey to secure the
                digital frontier!
              </p>

              <h1 className="heads text-light">Agenda</h1>
              <ul className="text-light">
                <li>Introduction to Cyber Security</li>
                <li>Explaining Virtual Machines</li>
                <li>Packet sniffing - Wireshark</li>
                <li>Network Scanner - NMAP</li>
                <li>Web req analysis - Burpsuite</li>
                <li>Explaining Attacks: DOS, DDOS, Phishing, SQL injection</li>
                <li>Making our own free storage server with old laptop</li>
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
                <li>Neelakshi S: 6379682291</li>
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
            knowledge in Cyber Security. Reserve your spot now!
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

export default CyberSecurity;
