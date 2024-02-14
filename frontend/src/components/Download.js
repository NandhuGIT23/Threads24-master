import html2canvas from "html2canvas";
import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

function Download({ user }) {
  const [qr, setQr] = useState(null);

  useEffect(() => {
    const generateQRCode = async () => {
      console.log(user._id);
      setQr(
        <div className="setup">
          <QRCodeSVG
            value={user._id}
            style={{ width: "200px", height: "200px" }}
          />
          {/* <br></br> */}
          {user.name}
        </div>
      );
    };

    generateQRCode();
  }, [user]);

  useEffect(() => {
    if (qr) {
      convertToImageAndDownload();
    }
  }, [qr]);

  const convertToImageAndDownload = async () => {
    const divToConvert = document.querySelector(".setup");
    if (!divToConvert) return;

    html2canvas(divToConvert)
      .then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "Sona-threads-ID.png";
        a.click();
      })
      .catch((error) => {
        console.error("Error converting div to image:", error);
      });
  };

  return <div>{qr}</div>;
}

export default Download;
