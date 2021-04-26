import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadproduct } from "../../Redux/Action/products";
import { useHistory } from "react-router-dom";

const SearchContent = ({ loadproduct, product, setSearchHide, searchTerm }) => {
  // console.log(searchTerm);
  // console.log(context);
  useEffect(() => {
    loadproduct();
  }, []);

  const history = useHistory();
  const handleSeeAllProduct = () => {
    history.push("/seeAllProduc");
  };

  return (
    <div className="search-content">
      <div className="">
        <p
          className="search-content-div-para"
          onClick={() => setSearchHide(false)}
        >
          {" "}
          TRENDING
        </p>

        {product &&
          product
            .filter((ele) => {
              if (searchTerm === "") {
                return ele;
              } else if (
                ele.productName
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return ele;
              }
            })
            .map((e, i) => {
              return (
                <div
                  onClick={() => setSearchHide(false)}
                  className="SearchContain2"
                >
                  <img
                    onClick={handleSeeAllProduct}
                    className="search-content-div-img"
                    src={e.images[0]}
                    alt="img"
                  />
                  <p
                    onClick={handleSeeAllProduct}
                    className="search-content-div-p"
                  >
                    {e.productName}
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
};
const mapStateToprops = (state) => ({
  product: state.products.product,
});
export default connect(mapStateToprops, { loadproduct })(SearchContent);
