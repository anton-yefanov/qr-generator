import { FC } from "react";
import { Color, Resolution } from "../../common/enums";
import { ColorButton } from "../ColorButton/";
import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";
import { IQrCodeProps } from "./types";

const QrCode: FC<IQrCodeProps> = ({ qrDisplay, qrCode, filename }) => {
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
        <ColorButton colorBG={Color.White} colorQR={Color.Black} />
        <ColorButton colorBG={Color.Blue} colorQR={Color.Yellow} />
        <ColorButton colorBG={Color.Red} colorQR={Color.Black} />
        <ResizeButton label={Resolution.x256} />
        <ResizeButton label={Resolution.x512} />
        <ResizeButton label={Resolution.x1024} />
        <DownloadButton filename={filename} qrCode={qrCode} />
      </div>
    </div>
  );
};

export default QrCode;
