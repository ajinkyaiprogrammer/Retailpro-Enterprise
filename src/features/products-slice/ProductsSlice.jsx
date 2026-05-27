import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(fetchPending()); // trigger loading state

    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    dispatch(fetchSuccess(data)); // trigger success state with payload
  } catch (error) {
    dispatch(fetchError(error.message)); // trigger error state with message
  }
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchError } = productSlice.actions;

export default productSlice.reducer;
