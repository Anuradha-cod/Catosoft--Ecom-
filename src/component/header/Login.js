import React, {useState} from 'react'
import { FaChevronDown, FaCartPlus, FaSearch  } from "react-icons/fa";
import LoginContain from './LoginContain';
// import { useState } from "react";

const Login =({setLogin})  =>{
    // const [unhide, setUnhide] = useState(false);
    // const merge = () =>{
    //     setUnhide (!unhide)
    // }
    return (
        <div className="right-nav">
            My Account
            <br />
            Login/Signup
            <FaChevronDown  onClick={() =>setLogin(true)}/>
        </div>
    )
}

export default Login
