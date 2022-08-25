import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setBlue, setRed } from "../../store/slices/colorSlice";
import { set256, set512, set1024 } from "../../store/slices/resolutionSlice";
import { Color, Resosution } from "../../common/enums";
import { IRootState } from "../../store";

import { ColorButton } from "../ColorButton";
import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";

interface IProps {
  qrDisplay: boolean;
  qrCode: string;
  url: string;
  filename: string;
}

export const QrCode: FC<IProps> = ({ qrDisplay, qrCode, url, filename }) => {
  const dispatch = useDispatch();
  const resolution = useSelector<IRootState, number>(
    (store) => store.resolution.resolution
  );
  const color = useSelector<IRootState, any>((store) => store.color.color);

  const setColorDark = dispatch(setDark);
  const setColorBlue = dispatch(setBlue);
  const setColorRed = dispatch(setRed);

  const setResolution256 = dispatch(set256);
  const setResolution512 = dispatch(set512);
  const setResolution1024 = dispatch(set1024);

  return (
    <div className={qrDisplay ? "qrCode qrCode--visible" : "qrCode"}>
      <img
        height={220}
        width={220}
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
          colorBG={Color.White}
          colorQR={Color.Black}
        />
        <ColorButton
          color={color}
          changeColor={() => dispatch(setColorBlue)}
          colorBG={Color.Yellow}
          colorQR={Color.Blue}
        />
        <ColorButton
          color={color}
          changeColor={() => dispatch(setColorRed)}
          colorBG={Color.Red}
          colorQR={Color.Black}
        />
        <ResizeButton
          resolution={resolution}
          changeResolution={() => dispatch(setResolution256)}
          label={Resosution.x256}
        />
        <ResizeButton
          resolution={resolution}
          changeResolution={() => dispatch(setResolution512)}
          label={Resosution.x512}
        />
        <ResizeButton
          resolution={resolution}
          changeResolution={() => dispatch(setResolution1024)}
          label={Resosution.x1024}
        />
        <DownloadButton filename={filename} qrCode={qrCode} />
      </div>
    </div>
  );
};
