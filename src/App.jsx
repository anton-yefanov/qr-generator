import QRCode from "qrcode";

import { useState } from "react";

import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";

export function App() {
  const [url, setUrl] = useState("");

  const [qrCode, setQrCode] = useState("");

  const [qrDisplay, setQrDisplay] = useState(false);

  const [loading, setLoading] = useState(false);

  const setImageUrl = (event) => {
    setUrl(event.target.value);
  };

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 1000,
        margin: 1.2,
      },
      (err, url) => {
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
          loading={loading}
        />
        <QrCode
          qrDisplay={qrDisplay}
          qrCode={qrCode}
          setLoading={setLoading}
          url={url}
        />
      </div>
    </>
  );
}
