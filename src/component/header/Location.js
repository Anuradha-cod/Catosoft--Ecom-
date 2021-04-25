import React, {useState}from 'react'
import { FaChevronDown, FaCartPlus, FaSearch  } from "react-icons/fa";

const Location =({setLocationView}) => { 
    return (
<div className="location" onClick={()=>setLocationView(true)}>
     <p className="location-para" >Location</p>
        </div>
    );
};

export default Location
