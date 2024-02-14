import React from "react";
import { Navbar1 } from "./Navbar1";
import HomeFooter from "./HomeFooter";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const img = new Image();
    img.src = "./images/space_torch.jpg"; // Replace with the URL of your background image
    img.onload = () => {
      document.querySelector(
        ".landingpage"
      ).style.backgroundImage = `url('${img.src}')`;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="landingpage">
      <section className="stars">
        <span className="star1"></span>
        <span className="star2"></span>
      </section>
      <div className="home-container">
        <Navbar1 />
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
              Welcome to{" "}
              <span className="btn-text-gradient--gold">THREADS'24</span>
            </h1>
            <p className="primary-text">
              A Journey of Discovery and Innovation at Threads' 24, Where Ideas
              Unravel and Knowledge Weaves its Intricate Patterns
            </p>
            {/* <a className="register_btn" href="/register" target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Register NOW
            </a> */}
            <p style={{ fontSize: "0.8em" }} className="primary-text2">
              Sona College of Technology, Department of Computer Science and
              Engineering
            </p>
          </div>
        </div>
      </div>
      <div className="section2">
        <div class="content-cards1">
          <Link
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
            to="/events"
          >
            <div className="card1 ">
              <h2 className="btn-text-gradient--gold dark">
                5 Technical events
              </h2>
              <p className="subtitle1 px-1">
                Embark on a Journey of Innovation: Unveiling 5 Cutting-Edge
                Technical Events to Ignite Your Curiosity! <br />
                <strong>Click to know more!!</strong>
              </p>
            </div>
          </Link>
          <Link
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
            to="/events"
          >
            <div className="card1">
              <h2 className="btn-text-gradient--gold dark">
                5 Non technical events
              </h2>
              <p className="subtitle1 px-1">
                Dive into Creativity: Unraveling 5 Vibrant Non-Tech Events to
                Spark Your Imagination! <br />
                Click to know more!!
              </p>
            </div>
          </Link>
          <Link
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
            to="/workshops"
          >
            <div className="card1">
              <h2 className="btn-text-gradient--gold dark">4 Workshops</h2>
              <p className="subtitle1 px-1">
                Unlock Your Potential: Immerse Yourself in 4 Inspiring Workshops
                to Learn, Create, and Grow <br />
                Click to know more!!
              </p>
            </div>
          </Link>
        </div>
        <a className="register_btn btn2" href="/register" target="_blank">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Register NOW
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
        }}
        className="mt-5"
      >
        <p
          style={{ fontSize: "0.8em", textAlign: "left" }}
          className="primary-text2"
        >
          For Queries, Contact: <br />
          Sarvesh - 9345315384 <br />
          Srikanth - 9345583144 <br />
          Senthil Kumar - 9994521119
          <br />
          Rampachan - 8903837949
        </p>
      </div>

      <div>
        <div class="content-cards1">
          <div className="card2">
            <h2 className="btn-text-gradient--gold dark">Development team</h2>
            <p className="subtitle1">
              Nandhavelan M S <br />
              Loghamaniya A <br />
              Pranav Jadhav <br />
              Nino Augustine
              <br />
            </p>
          </div>
        </div>
      </div>

      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
