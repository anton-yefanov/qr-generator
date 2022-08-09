import { GoButton } from "../GoButton";

export const Input = ({ GenerateQRCode, url, setImageUrl }) => {
  return (
    <div className="app__form">
      <input
        onChange={setImageUrl}
        value={url}
        className="app__form--input"
        type="text"
        placeholder="Введіть URL або текст..."
      />
      <GoButton GenerateQRCode={GenerateQRCode} />
    </div>
  );
};
