import { FC } from "react";
import { Resolution } from "../../common/enums";
import { IResizeButtonProps } from "./types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  set256Action,
  set512Action,
  set1024Action,
} from "../../store/slices/Resolution/resolutionSlice";

const ResizeButton: FC<IResizeButtonProps> = ({ label }) => {
  const resolution = useAppSelector((store) => store.resolution.resolution);
  const dispatch = useAppDispatch();

  const onChangeResolution = () => {
    switch (label) {
      case Resolution.x256:
        return dispatch(set256Action());
      case Resolution.x512:
        return dispatch(set512Action());
      case Resolution.x1024:
        return dispatch(set1024Action());
    }
  };

  return (
    <button
      aria-label="changeSize-button"
      onClick={onChangeResolution}
      className={
        +resolution === +label
          ? "qrCode__buttons--resize active"
          : "qrCode__buttons--resize"
      }
    >
      {label}px
    </button>
  );
};

export default ResizeButton;
