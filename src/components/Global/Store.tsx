import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../Global/ReduxState";

export const Store = configureStore({
  reducer: {
    myReducer,
  },
});
