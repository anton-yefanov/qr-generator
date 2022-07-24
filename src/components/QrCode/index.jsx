import { QrButton } from "../QrButton";

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
        <QrButton resolution="256" />
        <QrButton resolution="512" />
        <QrButton resolution="1024" />
        <QrButton resolution="Go" />
      </div>
    </div>
  );
};
