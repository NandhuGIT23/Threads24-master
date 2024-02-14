import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import spaceTorchImage from '../images/space_torch.jpg';
import mismatchimg from '../images/techShow1.svg';

const Techquiz = () => {
  return (
    <div>
      <Navbar />
      <Container fluid style={{ backgroundColor: 'black', backgroundImage: `url(${spaceTorchImage})`, backgroundSize: 'cover' }}>
        <h1 className="eventName welcometag">Tech Quiz</h1>
        <p className="eventDesc" style={{ textAlign: "center", marginTop: '20px', color: '#E4A732' }}>
          <FontAwesomeIcon icon={faClock} size='xs' className="mr-2" />
          Calling all tech wizards!!!! Time to unleash the champion in you by putting your technical know-how to the test!
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img src={mismatchimg} alt="techShow1" className="img-fluid rounded shadow-lg mx-auto d-block" style={{ width: '70%' }} />
              </div>
              <div className="details text-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <p className="detailsTxt custom-text-color">25/02/2023, 10AM - 4PM</p>
              </div>
              <div className="details text-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <p className="detailsTxt custom-text-color">Hall No: 311</p>
              </div>
            </Col>
            <Col md={6}>
              <h1 className="heads custom-text-color">RULES</h1>
              <ul className="points custom-text-color">
                <li>Solo participation only</li>
                <li>Two rounds will be conducted</li>
                <li>No external devices are allowed to use, if caught you are disqualified</li>
              </ul>

              <h1 className="heads custom-text-color">ROUNDS</h1>
              <ul className="points custom-text-color">
                <li>1st round: 25 MCQ based technical question</li>
                <li>2nd round: Coding MCQ's and pseudocodes</li>
              </ul>

              <h1 className="heads custom-text-color">Staff Coordinators</h1>
              <ul className="points custom-text-color">
                <li>DR A C KALADEVI</li>
                <li>DR J JAYANTHI</li>
              </ul>

              <h1 className="heads custom-text-color">Coordinators</h1>
              <ul className="points custom-text-color">
                <li>Kamali S: 9894441414</li>
                <li>Gokula Krishnan V: 7708202836</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="bottom text-center mt-5 pt-5 pb-5" style={{ width: '100%' }}>
          <h1 className="bottomHead">Register Now!!</h1>
          <br />
          <p className="bottomTxt">
            Don't miss out on one of the most exciting events that you will ever experience. Get ready to be excited and enhanced.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg" className="registerBtn">
              REGISTER EVENT
            </Button>
          </Link>
        </div>

        <div className="footer container-fluid bg-dark text-white pt-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center">
              <h1 className="footerHeadTxt">THREADS'24</h1>
              <p className="footerDesc">
                A National Level Technical symposium hosted by the Department of Computer Science and Engineering in Sona College of Technology, Salem. It provides a dias to exhibit the talents of the student enthusiasts of numerous facets of computer science.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="footerLinksHead">Connect with Us</h3>
              <a href="https://instagram.com/sonathreads?igshid=OTJlNzQ0NWM=" className="footerLink">
                Instagram: @sonathreads
              </a>
              <p className="footerLink">Email: threads.cse@sonatech.ac.in</p>
            </div>
          </div>

          <hr className="line line2" />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <p className="copyRight">© 2024 Threads'24. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Techquiz;
