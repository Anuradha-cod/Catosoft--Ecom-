import React from "react";
import "./seeAll.css";

const SeeAllNav = () => {
  return (
    <div className="main-nav">
      <div className="main-nav-left">
Super Store-Karol Bagh
      </div>
      <div className="main-nav-grocery">
         <p className="main-nav-grocery-para">Grocery & Staples</p>
         <p className="main-nav-grocery-para">Vegetables & Fruits</p>
         <p className="main-nav-grocery-para">Personal Care</p>
         {/* <p className="main-nav-grocery-para">Household Items</p> */}
         <p className="main-nav-grocery-para">Kitchen And Dining Needs</p>
         <p className="main-nav-grocery-para">More</p>
              </div>
    </div>
  );
};

export default SeeAllNav;
