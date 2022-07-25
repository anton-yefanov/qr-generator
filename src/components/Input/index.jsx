import { GoButton } from "../GoButton";

export const Input = ({ GenerateQRCode, url, setImageUrl, loading }) => {
  return (
    <div className="app__form">
      <input
        onChange={setImageUrl}
        value={url}
        className="app__form--input"
        type="text"
        placeholder="Type URL or Text..."
      />
      <GoButton GenerateQRCode={GenerateQRCode} loading={loading} />
    </div>
  );
};
