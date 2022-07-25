import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";

export const QrCode = ({ qrCode, setLoading, url }) => {
  return (
    <div className="qrCode">
      <img
        className="qrCode__image"
        src={qrCode}
        alt="qr-code"
        onLoad={() => setLoading(false)}
      />
      <div className="qrCode__buttons">
        <ResizeButton resolution="256" />
        <ResizeButton resolution="512" />
        <ResizeButton resolution="1024" />
        <DownloadButton qrCode={qrCode} url={url} />
      </div>
    </div>
  );
};
