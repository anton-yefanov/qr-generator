import { createSlice } from "@reduxjs/toolkit";
import { Color } from "../../../common/enums";
import { ColorInitialState } from "./types";

const colorInitialState: ColorInitialState = {
  color: { dark: Color.Black, light: Color.White },
};

const colorSlice = createSlice({
  name: "color",
  initialState: colorInitialState,
  reducers: {
    setDarkAction(state) {
      state.color.dark = Color.Black;
      state.color.light = Color.White;
    },
    setBlueAction(state) {
      state.color.dark = Color.Yellow;
      state.color.light = Color.Blue;
    },
    setRedAction(state) {
      state.color.dark = Color.Black;
      state.color.light = Color.Red;
    },
  },
});

export const { setDarkAction, setBlueAction, setRedAction } =
  colorSlice.actions;
export default colorSlice.reducer;
