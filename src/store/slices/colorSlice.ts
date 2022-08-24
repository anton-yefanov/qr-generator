import { createSlice } from "@reduxjs/toolkit";
import { Color } from "../../common/enums";

interface ColorInitialState {
  color: {
    dark: string;
    light: string;
  };
}

const colorInitialState: ColorInitialState = {
  color: { dark: Color.Black, light: Color.White },
};

const colorSlice = createSlice({
  name: "color",
  initialState: colorInitialState,
  reducers: {
    setDark(state, action) {
      state.color.dark = Color.Black;
      state.color.light = Color.White;
    },
    setBlue(state, action) {
      state.color.dark = Color.Yellow;
      state.color.light = Color.Blue;
    },
    setRed(state, action) {
      state.color.dark = Color.Black;
      state.color.light = Color.Red;
    },
  },
});

export const { setDark, setBlue, setRed } = colorSlice.actions;
export default colorSlice.reducer;
