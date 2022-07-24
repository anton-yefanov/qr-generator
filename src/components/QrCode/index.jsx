import { DownloadButton } from "../DownloadButton";
import { ResizeButton } from "../ResizeButton";

export const QrCode = ({ qrValue, setLoading }) => {
  return (
    <div className="qrCode">
      <img
        className="qrCode__image"
        src={qrValue}
        alt="qr-code"
        onLoad={() => setLoading(false)}
      />
      <div className="qrCode__buttons">
        <ResizeButton resolution="256" />
        <ResizeButton resolution="512" />
        <ResizeButton resolution="1024" />
        <DownloadButton />
      </div>
    </div>
  );
};
