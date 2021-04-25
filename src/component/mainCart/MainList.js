import React, { useState, useEffect } from "react";
import Main from "./Main";
import { useHistory } from "react-router-dom";
// import Slider from "infinite-react-carousel";
import "../mainCart/Main.css";
import { connect } from "react-redux";
import { loadproduct } from "../../Redux/Action/products";
// import Carousel from "react-multi-carousel";
const MainList = ({ loadproduct, product }) => {
  const history = useHistory();
  const handleSeeAllProduct = () => {
    history.push("/seeAllProduc");
  };

  useEffect(() => {
    loadproduct();
  }, []);

  return (
    <div>
      <div className="mainList-fresh">
        <h3>Fresh Fruits and Veggies</h3>
        <p onClick={handleSeeAllProduct} className="mainList-fresh-h2">
          See All
        </p>
      </div>
      <div className="mainlist">
        {product &&
          product.map((e, i) => {
            return <Main key={e._id} index={i} item={e} />;
          })}
        <div onClick={handleSeeAllProduct} className="main-contain-seeAll">
          <h2 className="main-contain-seeAll-h">See All </h2>
        </div>
      </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  product: state.products.product,
});
export default connect(mapStateToprops, { loadproduct })(MainList);
