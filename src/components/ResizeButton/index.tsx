import { FC } from "react";

interface IProps {
  resolution: number;
  label: number;
  changeResolution: () => void;
}

export const ResizeButton: FC<IProps> = ({
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
