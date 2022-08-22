import { useDispatch, useSelector } from "react-redux";
import { setDark, setBlue, setRed } from "../../store/slices/colorSlice";
import { set256, set512, set1024 } from "../../store/slices/resolutionSlice";

import { ColorButton } from "../ColorButton";
import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";

export const QrCode = ({ qrDisplay, qrCode, url, filename }) => {
  const resolution = useSelector((store) => store.resolution.resolution);
  const color = useSelector((store) => store.color.color);
  const dispatch = useDispatch();

  const setColorDark = dispatch(setDark);
  const setColorBlue = dispatch(setBlue);
  const setColorRed = dispatch(setRed);

  const setResolution256 = dispatch(set256);
  const setResolution512 = dispatch(set512);
  const setResolution1024 = dispatch(set1024);

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
          changeColor={() => dispatch(setColorDark)}
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
          width={resolution}
          changeResolution={() => dispatch(setResolution256)}
          resolution="256"
        />
        <ResizeButton
          width={resolution}
          changeResolution={() => dispatch(setResolution512)}
          resolution="512"
        />
        <ResizeButton
          width={resolution}
          changeResolution={() => dispatch(setResolution1024)}
          resolution="1024"
        />
        <DownloadButton filename={filename} qrCode={qrCode} url={url} />
      </div>
    </div>
  );
};
