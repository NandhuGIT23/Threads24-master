import React from "react";
import spaceTorchImage from "../images/space_torch.jpg";
import logo from "../images/ThreadsLogo.png";

function ComingSoon() {
  return (
    <div
      style={{
        // backgroundColor: "black",
        backgroundImage: `url(${spaceTorchImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgb(9,9,9,0.3)",
      }}
    >
      {/* <h1>Coming Soon</h1> */}
      <h2 style={{ color: "white", textAlign: "center" }}>
        This page is currently under construction. Please check back soon for
        updates!
      </h2>
      <img style={{ width: "50px", height: "50px" }} src={logo} alt="" />
    </div>
  );
}

export default ComingSoon;
