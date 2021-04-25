import React, { useState } from "react";
import "./Router.css";
import { useHistory } from "react-router-dom";

const LoginCust = ({}) => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const { email, password } = formData;
  const handlClick = async (e) => {};

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

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

export default LoginCust;
