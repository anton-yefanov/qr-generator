import { createSlice } from "@reduxjs/toolkit";
import { Resolution } from "../../common/enums";

interface ResolutionInitialState {
  resolution: number;
}

const resolutionInitialState: ResolutionInitialState = {
  resolution: Resolution.x256,
};

const resolutionSlice = createSlice({
  name: "resolution",
  initialState: resolutionInitialState,
  reducers: {
    set256Action(state) {
      state.resolution = Resolution.x256;
    },
    set512Action(state) {
      state.resolution = Resolution.x512;
    },
    set1024Action(state) {
      state.resolution = Resolution.x1024;
    },
  },
});

export const { set256Action, set512Action, set1024Action } =
  resolutionSlice.actions;
export default resolutionSlice.reducer;
