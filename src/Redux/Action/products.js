import axios from "axios";
import {
  GET_PRODUCT,
  INCREMENT_COUNT,
  DECEREMENT_COUNT,
  SELECT_PRODUCT,
} from ".././Action/types";

export const loadproduct = () => async (dispatch) => {
  const res = await axios.get(
    "https://powerful-dawn-74322.herokuapp.com/api/product"
  );
  dispatch({ type: GET_PRODUCT, payload: res.data });
};

export const incrementProductCount = (id) => (dispatch) => {
  dispatch({ type: INCREMENT_COUNT, payload: { id: id } });
};

export const decrementProductCount = (id) => (dispatch) => {
  dispatch({ type: DECEREMENT_COUNT, payload: { id: id } });
};
export const setSelectedProduct = (props) => (dispatch) => {
  dispatch({ type: SELECT_PRODUCT, payload: { ...props } });
};
