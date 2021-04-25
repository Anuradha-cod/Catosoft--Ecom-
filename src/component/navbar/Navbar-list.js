import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../navbar/Navbar.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import { loadCategory } from "../../Redux/Action/categories";

const NavbarList = ({ loadCategory, category }) => {
  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <div className="navbarlist-div">
      {category &&
        category.map((e, i) => {
          // return <div>asda</div>
          return <Navbar key={i} item={e} />;
        })}
    </div>
  );
};
const mapStateToprops = (state) => ({
  category: state.categories.category,
});
export default connect(mapStateToprops, { loadCategory })(NavbarList);
