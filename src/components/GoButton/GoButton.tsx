import { FC } from "react";
import { IGoButtonProps } from "./types";

const GoButton: FC<IGoButtonProps> = ({ GenerateQRCode }) => {
  return (
    <button
      aria-label="generateQR-button"
      onClick={GenerateQRCode}
      className="app__form--button"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.146439 10.3535C0.146439 10.9058 0.594155 11.3535 1.14644 11.3535H10.1464C10.6987 11.3535 11.1464 10.9058 11.1464 10.3535C11.1464 9.80125 10.6987 9.35353 10.1464 9.35353H2.14644V1.35353C2.14644 0.801246 1.69872 0.35353 1.14644 0.35353C0.594155 0.35353 0.146439 0.801246 0.146439 1.35353L0.146439 10.3535ZM1.14644 8.93932L0.439333 9.64642L1.85355 11.0606L2.56065 10.3535L1.14644 8.93932Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default GoButton;
