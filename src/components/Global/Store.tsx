import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import myReducer from "../Global/ReduxState";

export const Store = configureStore({
  reducer: {
    myReducer,
  },
});

//this will define your dispatch function and your selector function

export const UseAppDispatch: () => typeof Store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;
