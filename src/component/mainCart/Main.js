import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MainListBtn from "./MainListBtn";
import {
  incrementProductCount,
  setSelectedProduct,
  decrementProductCount,
} from "../../Redux/Action/products";

// import Main from './'

const Main = ({
  index,
  item,
  decrementProductCount,
  incrementProductCount,
  setSelectedProduct,
}) => {
  // console.log(item);
  const history = useHistory();

  // // const context = props.context;

  const handleIncrementBtn = () => {
    incrementProductCount(item._id);
  };
  const handleDecrementBtn = () => {
    decrementProductCount(item._id);
  };

  return (
    <div className="main-container">
      <div>
        <img className="img-main" src={item.images[0]} alt="img" />
        <h3 className="main-cont-h">₹{item.unitPrice}</h3>
        <p className="main-para"> {item.productName}</p>
        <p className="main-para"> 1{item.unitType}</p>
        <MainListBtn
          value={item.count}
          handleIncrementBtn={handleIncrementBtn}
          handleDecrementBtn={handleDecrementBtn}
        />
      </div>
    </div>
  );
};
// mapStateToProps
// mapDispatchToProps
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});
export default connect(mapStateToprops, {
  incrementProductCount,
  decrementProductCount,
  setSelectedProduct,
})(Main);
