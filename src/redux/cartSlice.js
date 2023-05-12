import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataproduct: [],
  product: [],
  language: null,
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
    updatevalueinput: (state, action) => {
      state.product = action.payload.product;
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
      const itemIndex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.product[itemIndex].quantity > 0) {
        state.product[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.product[itemIndex].quantity > 1) {
        state.product[itemIndex].quantity -= 1;
      }
    },
    //
    setLanguage: (state, action) => {
      state.language = action.payload;
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
  updatevalueinput,
  setLanguage,
} = cartSlice.actions;

export default cartSlice.reducer;
