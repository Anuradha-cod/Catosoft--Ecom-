import axios from "axios";
import { GET_CATEGORY } from ".././Action/types";

export const loadCategory = () => async (dispatch) => {
  const res = await axios.get(
    "https://powerful-dawn-74322.herokuapp.com/api/category"
  );
  dispatch({ type: GET_CATEGORY, payload: res.data });
};
