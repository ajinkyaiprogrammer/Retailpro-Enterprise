import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const ifItemExist = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (ifItemExist) {
        ifItemExist.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItems: (state, action) => {
      const itemExist = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      if (itemExist) itemExist.quantity += 1;
    },
    decrementItems: (state, action) => {
      const itemExist = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      if (itemExist) {
        if (itemExist.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload,
          );
        } else {
          itemExist.quantity -= 1;
        }
      }
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, incrementItems, decrementItems, removeItems } =
  cartSlice.actions;

export default cartSlice.reducer;
