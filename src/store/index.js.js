import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorSlice";

const rootReducer = combineReducers({
  color: colorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
