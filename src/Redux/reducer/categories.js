import { GET_CATEGORY } from ".././Action/types";

const initialState = {
  category: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY:
      return { ...state, category: payload };

    default:
      return { ...state };
  }
};
