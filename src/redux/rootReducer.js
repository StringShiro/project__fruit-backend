import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  cartSlice: cartSlice,
});
export default rootReducer;
