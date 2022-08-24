import QRCode from "qrcode";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Input } from "./components/Input";
import { QrCode } from "./components/QrCode";
import { IRootState } from "./store";

export function App() {
  const color = useSelector<IRootState, any>((store) => store.color.color);
  const resolution = useSelector<IRootState, number>(
    (store) => store.resolution.resolution
  );

  const [url, setUrl] = useState<string>("");

  const [qrCode, setQrCode] = useState<string>("");

  const [qrDisplay, setQrDisplay] = useState<boolean>(false);

  const [filename, setFilename] = useState<string>("");

  const setImageUrl = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value);
  };

  useEffect(() => {
    qrDisplay && GenerateQRCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, resolution]);

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: resolution,
        margin: 1.2,
        color: color,
      },
      (err: Error | null | undefined, url: string) => {
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
