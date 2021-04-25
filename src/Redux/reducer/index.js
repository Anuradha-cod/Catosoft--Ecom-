import { combineReducers } from "redux";
import categories from "./categories";
import products from ".././reducer/products";
// import alert from "../../reducer/alert";

export default combineReducers({
  categories,
  products,
});
