import React, { useState } from "react";

import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";

export function App() {
  const [inputValue, setInputValue] = useState("");
  const setInput = (event) => {
    setInputValue(event.target.value);
  };

  const [qrValue, setQrValue] = useState("");

  const [qrDisplay, setQrDisplay] = useState(false);

  const [loading, setLoading] = useState(false);

  const onClickGo = () => {
    const currentValue = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    if (currentValue === qrValue) {
      return;
    }
    setLoading(true);
    setQrValue(
      `https://api.qrserver.com/v1/create-qr-code/?size=250x2500&data=${inputValue}`
    );
    setQrDisplay(true);
  };

  return (
    <>
      <div className="app">
        <h1 className="app__title">QR Code Generator</h1>
        <Input
          onClickGo={onClickGo}
          inputValue={inputValue}
          setInputValue={setInput}
          loading={loading}
        />
        {qrDisplay && <QrCode qrValue={qrValue} setLoading={setLoading} />}
      </div>
    </>
  );
}
