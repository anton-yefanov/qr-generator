import { FC } from "react";
import { GoButton } from "../GoButton";
import { IInputProps } from "./types";

const Input: FC<IInputProps> = ({ GenerateQRCode, url, setImageUrl }) => {
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

export default Input;
