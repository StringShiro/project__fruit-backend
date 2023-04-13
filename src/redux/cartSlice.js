import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataproduct: [],
  product: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getdataproduct: (state, action) => {
      state.dataproduct = [action.payload];
    },
    addToCart: (state, action) => {
      const item = state.product.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.product = [];
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.product.find((p) => p.id === productId);
      if (product) {
        product.quantity--;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.find((p) => p.id === productId);
      if (product && product.quantity > 0) {
        product.quantity--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getdataproduct,
  addToCart,
  removeFromCart,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
