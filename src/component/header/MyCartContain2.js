import React from "react";
import MainListBtn from "../../component/mainCart/MainListBtn";

import { connect } from "react-redux";
import {
  incrementProductCount,
  decrementProductCount,
} from "../../Redux/Action/products";

const MyCartContain2 = ({
  item,
  incrementProductCount,
  decrementProductCount,
}) => {
  // console.log(props);
  const handleIncrementBtn = () => {
    incrementProductCount(item._id);
  };

  const getTotal = () => {
    const addTotal = item.count * item.unitPrice;
    return addTotal;
  };

  const handleDecrementBtn = () => {
    decrementProductCount(item._id);
  };

  return (
    <div className="header-div-container">
      <div className="mycartcontain2">
        <div className="mycartcontainDiv">
          <img className="mycartcontain2-img" src={item.images[0]} alt="img" />

          <p>
            {item.productName} ₹{item.unitPrice}
          </p>
          <p>/</p>
          <p>{item.count}=</p>
          <p>{getTotal()}</p>
        </div>

        <p className="myCartcontain-p">
          {item.unitVariation}
          {item.unitType}
        </p>
        <MainListBtn
          value={item.count}
          handleDecrementBtn={handleDecrementBtn}
          handleIncrementBtn={handleIncrementBtn}
        />
      </div>
      {/* <div className="myContainer2-total">total</div> */}
    </div>
  );
};
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});
export default connect(mapStateToprops, {
  incrementProductCount,
  decrementProductCount,
})(MyCartContain2);
