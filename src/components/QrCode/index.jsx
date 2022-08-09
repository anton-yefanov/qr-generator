import { ColorButton } from "../ColorButton";
import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";

export const QrCode = ({
  qrDisplay,
  qrCode,
  url,
  color,
  width,
  filename,
  setBlue,
  setDark,
  setRed,
  set256,
  set512,
  set1024,
}) => {
  return (
    <div className={qrDisplay ? "qrCode qrCode--visible" : "qrCode"}>
      <img
        className={
          qrDisplay ? "qrCode__image qrCode__image--visible" : "qrCode__image"
        }
        src={qrCode}
        alt="qr-code"
      />
      <div
        className={
          qrDisplay
            ? "qrCode__buttons qrCode__buttons--visible"
            : "qrCode__buttons"
        }
      >
        <ColorButton
          color={color}
          changeColor={setDark}
          colorBG="#ffffff"
          colorQR="#000000"
        />
        <ColorButton
          color={color}
          changeColor={setBlue}
          colorBG="#ffe600"
          colorQR="#0004ff"
        />
        <ColorButton
          color={color}
          changeColor={setRed}
          colorBG="#c50000"
          colorQR="#000000"
        />
        <ResizeButton
          width={width}
          changeResolution={set256}
          resolution="256"
        />
        <ResizeButton
          width={width}
          changeResolution={set512}
          resolution="512"
        />
        <ResizeButton
          width={width}
          changeResolution={set1024}
          resolution="1024"
        />
        <DownloadButton filename={filename} qrCode={qrCode} url={url} />
      </div>
    </div>
  );
};
