import {
  GET_PRODUCT,
  INCREMENT_COUNT,
  DECEREMENT_COUNT,
  SELECT_PRODUCT,
} from "../../Redux/Action/types";

const initialState = {
  product: [],
  updatedProduct: [],
  selectedProduct: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        updatedProduct: payload,
      };

    case SELECT_PRODUCT:
      return { ...state, selectedProduct: payload };

    case INCREMENT_COUNT:
      let id = payload.id;
      let index = state.updatedProduct.findIndex((ele) => ele._id === id);
      let item = state.updatedProduct[index];
      !item.count ? (item.count = 1) : (item.count = item.count + 1);

      let newUpdatedProduct = [...state.updatedProduct];
      newUpdatedProduct[index] = item;
      return { ...state, updatedProduct: newUpdatedProduct };

    case DECEREMENT_COUNT:
      let decreentIndex = state.updatedProduct.findIndex(
        (ele) => ele._id === payload.id
      );
      console.log(payload.id);
      let decementItem = state.updatedProduct[decreentIndex];
      if (decementItem.count >= 1) {
        decementItem.count = decementItem.count - 1;
      } else {
        decementItem.count = undefined;
      }
      let newUpdatedDecrementProduct = [...state.updatedProduct];
      newUpdatedDecrementProduct[decreentIndex] = decementItem;
      return { ...state, updatedProduct: newUpdatedDecrementProduct };

    default:
      return { ...state };
  }
};
