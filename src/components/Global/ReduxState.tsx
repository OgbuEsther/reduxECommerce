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
  name: "ecommerce",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<userData>) => {
      state.currentUser = payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginUser, logoutUser } = ReduxState.actions;

export default ReduxState.reducer;
