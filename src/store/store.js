import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products-slice/ProductsSlice";
import cartReducer from "../features/cart-slice/CartSlice";
import navigationReducer from "../features/navigation/NavigationSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    navigation: navigationReducer,
  },
});
