import QRCode from "qrcode";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";

export function App() {
  const color = useSelector((store) => store.color.color);

  const resolution = useSelector((store) => store.resolution.resolution);

  const [url, setUrl] = useState("");

  const [qrCode, setQrCode] = useState("");

  const [qrDisplay, setQrDisplay] = useState(false);

  useEffect(() => {
    qrDisplay && GenerateQRCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, resolution]);

  const setImageUrl = (event) => {
    setUrl(event.target.value);
  };

  const [filename, setFilename] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: resolution,
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
        setFilename(`${resolution}x${resolution}_QR-Code`);
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
          qrDisplay={qrDisplay}
          qrCode={qrCode}
          url={url}
          filename={filename}
        />
      </div>
    </>
  );
}
