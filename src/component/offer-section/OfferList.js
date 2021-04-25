// import {useState, useEffect } from "react"
import React from 'react'
import { useHistory } from "react-router-dom";
const OfferList = (props) => {
    const history = useHistory()
  const handleSeeAllProduct =() =>{
      history.push("/seeAllProduc");
  }

    return (
 <div className="offer-icon-div" >
            <div className="offer-icon-div2">
                
            <img onClick={handleSeeAllProduct} className="offer-icon-img" src={props.item.images[0]} alt="img"/>

            <h3 className="offer-icon-para">₹{props.item.unitPrice}</h3>
            </div>
      {props.item.productName}
      <p className="offer-icon-para-p"> 1{props.item.unitType}</p>
            {/* <p className="">₹{props.item.unitPrice}</p> */}
            
            </div>

    )
}

export default OfferList
