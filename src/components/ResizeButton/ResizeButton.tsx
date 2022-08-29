import { FC } from "react";
import { IResizeButtonProps } from "./types";

const ResizeButton: FC<IResizeButtonProps> = ({
  resolution,
  label,
  changeResolution,
}) => {
  return (
    <button
      aria-label="changeSize-button"
      style={
        +resolution === +label
          ? {
              transform: "translateY(3px)",
              boxShadow: "0 0 0 0 black",
              backgroundColor: "hsl(245, 45%, 60%)",
            }
          : undefined
      }
      onClick={changeResolution}
      className="qrCode__buttons--resize"
    >
      {label}
    </button>
  );
};

export default ResizeButton;
