import React from "react";
import { connect } from "react-redux";
import { incrementProductCount } from "../../../Redux/Action/products";

const PaymentCheckOut = ({ item, updatedProduct }) => {
  let subtotal = 0;
  updatedProduct.forEach((item) => {
    subtotal = subtotal + (item.count || 0) * item.unitPrice;
  });
  return (
    <div className="paymentCheckOut">
      <div className="paymentCheckOut-div">
        <div className="paymentCheckOut-div-1">
          <h1 className="paymentCheckOut-h4">Cart Amount</h1>
          <h1 className="paymentCheckOut-h4">{subtotal + 39}</h1>
        </div>
        <button className="payment-button">Payment</button>
      </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  updatedProduct: state.products.updatedProduct,
});

export default connect(mapStateToprops, { incrementProductCount })(
  PaymentCheckOut
);
