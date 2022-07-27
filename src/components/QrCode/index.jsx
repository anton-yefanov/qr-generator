import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";

export const QrCode = ({ qrDisplay, qrCode, setLoading, url }) => {
  return (
    <div className={qrDisplay ? "qrCode qrCode--visible" : "qrCode"}>
      <img
        className={
          qrDisplay ? "qrCode__image qrCode__image--visible" : "qrCode__image"
        }
        src={qrCode}
        alt="qr-code"
        onLoad={() => setLoading(false)}
      />
      <div
        className={
          qrDisplay
            ? "qrCode__buttons qrCode__buttons--visible"
            : "qrCode__buttons"
        }
      >
        <ResizeButton resolution="256" />
        <ResizeButton resolution="512" />
        <ResizeButton resolution="1024" />
        <DownloadButton qrCode={qrCode} url={url} />
      </div>
    </div>
  );
};
