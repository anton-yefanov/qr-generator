import { createSlice } from "@reduxjs/toolkit";

interface ResolutionInitialState {
  resolution: number;
}

const resolutionInitialState: ResolutionInitialState = {
  resolution: 256,
};

const resolutionSlice = createSlice({
  name: "resolution",
  initialState: resolutionInitialState,
  reducers: {
    set256(state) {
      state.resolution = 256;
    },
    set512(state) {
      state.resolution = 512;
    },
    set1024(state) {
      state.resolution = 1024;
    },
  },
});

export const { set256, set512, set1024 } = resolutionSlice.actions;
export default resolutionSlice.reducer;
