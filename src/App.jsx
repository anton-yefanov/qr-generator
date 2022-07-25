import axios from "axios";
import QRCode from "qrcode";

import React, { useState } from "react";

import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";

export function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const setImageUrl = (event) => {
    setUrl(event.target.value);
  };

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 1000,
        margin: 0,
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrCode(url);
        setQrDisplay(true);
      }
    );
  };

  const [qrDisplay, setQrDisplay] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="app">
        <h1 className="app__title">Створити QR код</h1>
        <Input
          GenerateQRCode={GenerateQRCode}
          url={url}
          setImageUrl={setImageUrl}
          loading={loading}
        />
        {qrDisplay && (
          <QrCode qrCode={qrCode} setLoading={setLoading} url={url} />
        )}
      </div>
    </>
  );
}
