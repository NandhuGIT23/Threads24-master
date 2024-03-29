import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import sona from "../images/sona.png";
import dc from "../images/dc.svg";
import csi from "../images/csi.svg";
import iste from "../images/iste.svg";
import cc from "../images/cc.svg";
import threadslogo from "../images/threadslogo.svg";
import sponsor from "../images/sponsor.jpeg";
import sponsor2 from "../images/sponsor2.png";

const HomeFooter = () => {
  return (
    <div className="footer container-fluid py-5 text-white ">
      <div className="row d-flex justify-content-center">
        <div className="col-3 col-md-1 my-2 ">
          <img src={csi} alt="logo" className="logo footerLogo footerImg" />
        </div>
        <div className="col-3 col-md-1 my-2 ">
          <img src={iste} alt="logo" className="logo footerLogo footerImg" />
        </div>
        <div className="col-3 col-md-1 mx-3 my-2">
          <img src={dc} alt="logo" className="logo footerLogo footerImg" />
        </div>
        <div className="col-3 col-md-1 mx-1 my-2 ">
          <img src={cc} alt="logo" className="logo footerLogo footerImg" />
        </div>
        <div className="col-2 col-md-1 my-2 d-flex align-items-center">
          <img
            src={threadslogo}
            alt="logo"
            className="logo footerLogo footerImg"
          />
        </div>
        <div className="col-6 col-md-2 my-2 ">
          <img
            src={sona}
            alt="logo"
            className="logo footerLogo footerImg sona"
          />
        </div>
        <div className="col-6 col-md-2 my-2 d-flex align-items-center">
          <img
            src={sponsor}
            alt="logo"
            className="logo footerLogo footerImg sponsor"
          />
        </div>
        <div className="col-6 col-md-2 my-2 d-flex align-items-center">
          <img
            src={sponsor2}
            alt="logo"
            className="logo footerLogo footerImg sponsor"
          />
        </div>
      </div>
      <hr />
      <div className="footerHead text-center">
        <h1 className="footerHeadTxt ">ABOUT US</h1>
        {/* <h1 className="footerHeadTxt btn-text-gradient--gold">ABOUT US</h1> */}
        <p>
          <strong className="btn-text-gradient--gold">Threads - </strong>
          Our symposium comprises of 4 workshops which will provide hands-on
          learning experience on latest technologies. And, there are 5 technical
          events & 5 non-technical events ensuring a diversified learning
          experience filled with fun and interactions. Winners of the respective
          events will be honoured with winning certificates and rewards. And
          every participant will get a participation certificate and a whole bag
          of valuable experience. Refreshments will be provided for the
          participants
        </p>
        <p>
          <strong className="btn-text-gradient--gold">
            Department of CSE -{" "}
          </strong>
          Provides knowledge on various current trend and demanding technologies
          and helps the students to implement them in reality. We provide
          complete support and freedom to students to focus and grow on their
          interested disciplines. And we organize various events, workshops and
          guest lectures to provide our students a wholistic development. We
          also encourage our students to provide solutions for the modern
          real-time problems and to benefit the society
        </p>
      </div>

      <hr className="line line2" />

      <div className="footerLinks text-center row">
        <div className="col-6">
          <p style={{ fontSize: "12px" }}>Sona.cse.sympo@gmail.com</p>
        </div>
        <div className="col-6">
          {" "}
          {/* <i class="bi bi-instagram"></i> */}
          <p style={{ fontSize: "12px" }}>
            <a
              href="https://www.instagram.com/csesona?igsh=ZDE2eG83bTJtM3Fv"
              className="d-flex align-items-center justify-content-center text-center"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              sonathreads
            </a>
          </p>
        </div>
      </div>

      <hr className="line line2" />
      <p className="footerDesc text-center">
        A National Level Technical symposium hosted by the Department of
        Computer Science and Engineering in Sona College of Technology, Salem.
        It provides a dias to exhibit the talents of the student enthusiasts of
        numerous facets of computer science
      </p>
    </div>
  );
};

export default HomeFooter;
