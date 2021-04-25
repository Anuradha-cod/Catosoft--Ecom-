import {
  LOAD_USERS,
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  ERROR,
  LOGOUT,
} from ".././Action/types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: {},
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload, loading: false, isAuthenticated: true };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem("token", payload.token);
      return { isAuthenticated: false, loading: false, user: {} };

    default:
      return { ...state };
  }
};
