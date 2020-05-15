import { combineReducers } from "redux";
import cartReducer from "./cartReducer.js";

export default combineReducers({
  cart: cartReducer,
});
