import { combineReducers } from "redux";
import auth from ".././reducer/auth";

import categories from "./categories";
import products from ".././reducer/products";
// import alert from "../../reducer/alert";

export default combineReducers({
  auth,
  categories,
  products,
  // alert,
});
