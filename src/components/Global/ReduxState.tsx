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
  totalPrice: 0,
  totalQuantity: 0,
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
    clearCart: (state) => {
      state.cart = [];
    },
    addToCart: (state, { payload }: PayloadAction<cartData>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].cartQuantity += 1;
      } else {
        state.cart.push({
          ...payload,
          cartQuantity: 1,
        });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<cartData>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (state.cart[check].cartQuantity > 1) {
        state.cart[check].cartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }

      state.totalQuantity -= 1;
    },
  },
});

export const { loginUser, logoutUser, addToCart, removeFromCart } =
  ReduxState.actions;

export default ReduxState.reducer;
