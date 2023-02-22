import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  email: string;
  password: string;
  _id: string;
}

interface cartData {
  title: string;
  description: string;
  price: number;
  category: string;
  _id: string;
  cartQuantity: number;
}

const initialState = {
  currentUser: {} as userData | null,
  cart: [] as Array<cartData>,
};

const ReduxState = createSlice({
  name: "second",
  initialState,
  reducers: {},
});

export const {} = ReduxState.actions;

export default ReduxState.reducer;
