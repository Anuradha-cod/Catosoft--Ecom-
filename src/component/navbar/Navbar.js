import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

function Navbar (props) {
  const history = useHistory()
  const handleSeeAllProduct =() =>{
      history.push("/seeAllProduc");
  }

    return (
      <div className="nav-list">
        <div className="img-class">
          <img  onClick={handleSeeAllProduct} className="img-nav" src={props.item.image} alt="img" />
          <p className="img-clas">{props.item.title}</p>
        </div>
      </div>
    );
  }
export default Navbar;
