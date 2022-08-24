import { FC } from "react";
import { GoButton } from "../GoButton";

interface IProps {
  GenerateQRCode: () => void;
  url: string;
  setImageUrl: any;
}

export const Input: FC<IProps> = ({ GenerateQRCode, url, setImageUrl }) => {
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
