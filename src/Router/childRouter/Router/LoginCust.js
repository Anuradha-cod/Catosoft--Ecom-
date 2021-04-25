import React, { useState } from "react";
import axios from "axios";
import "./Router.css";
import { Redirect, useHistory } from "react-router-dom";

import { login } from "../../../Redux/Action/auth";

import { connect } from "react-redux";
// import {isAu} from 'module'

const LoginCust = ({ login, isAuthenticated }) => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const { email, password } = formData;
  const handlClick = async (e) => {
    // history.push("/");

    e.preventDefault();
    login(email, password);
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="loginDetail">
      <div className="login-div">
        <h3>Login</h3>
        <form className="login-form">
          <div>
            <p className="login-para">E-mail:</p>
            <input
              className="login-input"
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
            />
          </div>
          <div>
            <p className="login-para">Password:</p>
            <input
              className="login-input"
              onChange={(e) => handleChange(e)}
              type="password"
              name="password"
            />
          </div>
          <button className="login-btn" onClick={handlClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
// const mapStateToProps =(...state) => {
//   isAuthenticated: state.auth.isAuthenticated,
// };
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginCust);
