import logo from "../images/ThreadsLogo.png";

import spaceTorchImage from "../images/space_torch.jpg";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${spaceTorchImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <img src={logo} style={{ width: "50px", height: "50px" }} alt="" /> <br />
      <p>Your page is loading</p>
    </div>
  );
}
