import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./slices/QRColor/colorSlice";
import resolutionReducer from "./slices/Resolution/resolutionSlice";

const rootReducer = combineReducers({
  color: colorReducer,
  resolution: resolutionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
