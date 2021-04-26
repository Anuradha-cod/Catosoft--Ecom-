import { combineReducers } from "redux";
import categories from "./categories";
import products from ".././reducer/products";

export default combineReducers({
  categories,
  products,
});
