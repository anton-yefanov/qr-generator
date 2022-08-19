import { useDispatch } from "react-redux";
import { setDark, setBlue, setRed } from "../../store/slices/colorSlice";

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
  set256,
  set512,
  set1024,
}) => {
  const colors = {
    dark: { dark: "#000000", light: "#ffffff" },
    blue: { dark: "#0004ff", light: "#ffe600" },
    red: { dark: "#000000", light: "#c50000" },
  };

  const dispatch = useDispatch();
  const setColorDark = dispatch(setDark);
  const setColorBlue = dispatch(setBlue);
  const setColorRed = dispatch(setRed);
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
          changeColor={() => dispatch(setColorDark({ colors }))}
          colorBG="#ffffff"
          colorQR="#000000"
        />
        <ColorButton
          color={color}
          changeColor={() => dispatch(setColorBlue)}
          colorBG="#ffe600"
          colorQR="#0004ff"
        />
        <ColorButton
          color={color}
          changeColor={() => dispatch(setColorRed)}
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
