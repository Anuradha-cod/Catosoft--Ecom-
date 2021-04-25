import {
  LOAD_USERS,
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  ERROR,
  LOGOUT,
} from "../../Redux/Action/types";
import axios from "axios";
import setAuthToken from "../../Router/Utility/setAuthToken";

// import { setAlert } from "./alert";

export const loadUsers = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://powerful-dawn-74322.herokuapp.com/api/auth"
    );
    dispatch({ type: LOAD_USERS, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  const config = { headers: { "Content-Type": "application/json" } };

  console.log("loginAction");
  try {
    let res = await axios.post(
      "https://powerful-dawn-74322.herokuapp.com/api/auth",
      body,
      config
    );
    console.log(res);
    dispatch({ type: LOGIN_SUCCES, payload: res.data });
  } catch (error) {
    const err = error.response.data.errors;
    console.log(err);
    dispatch({ type: LOGIN_FAIL });
  }
};
export const register = (name, email, password) => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });
  const config = { headers: { "Content-Type": "application/json" } };

  console.log("loginAction");
  try {
    let res = await axios.post(
      "https://powerful-dawn-74322.herokuapp.com/api/users",
      body,
      config
    );
    console.log(res);
    dispatch({ type: REGISTER_SUCCES, payload: res.data });
  } catch (error) {
    const err = error.response.data.errors;
    // console.log(err, "alert errors");
    dispatch({ type: REGISTER_FAIL });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
