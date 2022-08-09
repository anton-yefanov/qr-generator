import QRCode from "qrcode";

import { useState, useEffect } from "react";

import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";

export function App() {
  const [color, setColor] = useState({ dark: "#000000", light: "#ffffff" });

  const [width, setWidth] = useState(256);

  const [url, setUrl] = useState("");

  const [qrCode, setQrCode] = useState("");

  const [qrDisplay, setQrDisplay] = useState(false);

  useEffect(() => {
    qrDisplay && GenerateQRCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, width]);

  const setImageUrl = (event) => {
    setUrl(event.target.value);
  };

  const setDark = () => {
    if (color.light === "#ffffff") return;
    setColor({ dark: "#000000", light: "#ffffff" });
  };

  const setBlue = () => {
    if (color.light === "#ffe600") return;
    setColor({ dark: "#0004ff", light: "#ffe600" });
  };

  const setRed = () => {
    if (color.light === "#c50000") return;
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

  const [filename, setFilename] = useState("");

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
        setFilename(`${width}x${width}_QR-Code`);
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
          filename={filename}
        />
      </div>
    </>
  );
}
