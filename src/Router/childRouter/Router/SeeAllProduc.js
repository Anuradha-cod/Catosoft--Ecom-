import React, { useState, useEffect } from "react";
import SeeAllMain from "../../../component/SeeAllProduct/SeeAllMain";
import SeeAllNav from "../../../component/SeeAllProduct/SeeAllNav";
import "./Router.css";

const SeeAllProduc = () => {
  return (
    <div className="seeAllProduct">
      <SeeAllNav />
      <SeeAllMain />
    </div>
  );
};

export default SeeAllProduc;
