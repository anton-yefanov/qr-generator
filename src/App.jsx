import QRCode from "qrcode";

import { useState, useEffect } from "react";

import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";

export function App() {
  const [color, setColor] = useState({ dark: "#000000", light: "#ffffff" });

  const [width, setWidth] = useState(256);

  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("use effect triggered");
    QRCode.toDataURL(
      url,
      {
        width: width,
        margin: 1.2,
        color: color,
      },
      (err, url) => {
        if (!url)
          setQrCode(
            "https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
          );
        setQrDisplay(true);
        if (err) return console.error(err);
        setQrCode(url);
        setQrDisplay(true);
      }
    );
  }, [color, width]);

  const [qrCode, setQrCode] = useState("");

  const [qrDisplay, setQrDisplay] = useState(false);

  const setImageUrl = (event) => {
    setUrl(event.target.value);
  };

  const setDark = () => {
    setColor({ dark: "#000000", light: "#ffffff" });
  };

  const setBlue = () => {
    setColor({ dark: "#0004ff", light: "#ffe600" });
  };

  const setRed = () => {
    setColor({ dark: "#000000", light: "#c50000" });
  };

  const set256 = () => {
    setWidth(256);
  };

  const set512 = () => {
    setWidth(512);
  };

  const set1024 = () => {
    setWidth(1024);
  };

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: width,
        margin: 1.2,
        color: color,
      },
      (err, url) => {
        if (!url)
          setQrCode(
            "https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
          );
        setQrDisplay(true);
        if (err) return console.error(err);
        setQrCode(url);
        setQrDisplay(true);
      }
    );
  };

  return (
    <>
      <div className={qrDisplay ? "app app--visible" : "app"}>
        <Input
          GenerateQRCode={GenerateQRCode}
          url={url}
          setImageUrl={setImageUrl}
        />
        <QrCode
          width={width}
          color={color}
          set256={set256}
          set512={set512}
          set1024={set1024}
          setDark={setDark}
          setBlue={setBlue}
          setRed={setRed}
          qrDisplay={qrDisplay}
          qrCode={qrCode}
          url={url}
        />
      </div>
    </>
  );
}
