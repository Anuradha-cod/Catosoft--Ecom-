import React from 'react'
import { FaChevronDown, FaCartPlus, FaSearch  } from "react-icons/fa";

const Search =({setSearchHide}) =>{
    return (
        <div className="search-div">
            <input onClick={() =>setSearchHide(true)} className="search" placeholder="Search for products" /> 
        </div>
    )
}

export default Search
 