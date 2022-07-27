import { GoButton } from "../GoButton";

export const Input = ({ GenerateQRCode, url, setImageUrl, loading }) => {
  return (
    <div className="app__form">
      <input
        onChange={setImageUrl}
        value={url}
        className="app__form--input"
        type="text"
        placeholder="Введіть URL або текст..."
      />
      <GoButton GenerateQRCode={GenerateQRCode} loading={loading} />
    </div>
  );
};
