import React, { useState, useEffect } from "react";
import OfferList from "./OfferList";
import { connect } from "react-redux";
import { loadproduct } from "../../Redux/Action/products";

function OfferListItem({ loadproduct, product, setIsVisible }) {
  useEffect(() => {
    loadproduct();
  }, []);

  return (
    // props.isVisible &&
    <div onClick={() => setIsVisible(false)} className="OfferListItem">
      {product &&
        product.map((e, i) => {
          return <OfferList key={i} item={e} />;
        })}
    </div>
  );
}
const mapStateToprops = (state) => ({
  product: state.products.product,
});
export default connect(mapStateToprops, { loadproduct })(OfferListItem);
