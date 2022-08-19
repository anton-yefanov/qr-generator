import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    color: { dark: "#000000", light: "#ffffff" },
  },
  reducers: {
    setDark(state, action) {
      state.color = action.payload.colors.dark;
    },
    setBlue(state, action) {
      state.color.dark = "#0004ff";
      state.color.light = "#ffe600";
    },
    setRed(state, action) {
      state.color.dark = "#000000";
      state.color.light = "#c50000";
    },
  },
});

export const { setDark, setBlue, setRed } = colorSlice.actions;
export default colorSlice.reducer;
