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
    },
    removeFromCart: (state, { payload }: PayloadAction<cartData>) => {
      const removeItem = state.cart.filter((el) => el._id !== payload._id);
      state.cart = removeItem;
    },

    removeProduct: (state, { payload }: PayloadAction<cartData>) => {},

    // removeProduc: (state, action) => {
    //   let index = state.cart.indexOf(action.payload);

    //   state.cart.splice(index, 1)

    // }
  },
});

export const { loginUser, logoutUser, addToCart, removeProduct } =
  ReduxState.actions;

export default ReduxState.reducer;
