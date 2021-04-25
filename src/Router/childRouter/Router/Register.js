import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { register } from "../../../Redux/Action/auth";
import "./Router.css";
import { connect } from "react-redux";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password, password2 } = formData;
  const history = useHistory();
  const handlePush = () => {
    history.push("/login");
  };
  const handlClick = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  console.log(formData);
  return (
    <div className="register">
      <div className="register-div">
        <form className="register-form">
          <h3>SignUp</h3>
          <div>
            <p className="register-para">Name:</p>
            <input
              className="register-input"
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
            />
          </div>
          <div>
            <p className="register-para">E-mail:</p>
            <input
              className="register-input"
              onChange={handleChange}
              type="email"
              name="email"
              value={email}
            />
          </div>
          <div>
            <p className="register-para">Password:</p>
            <input
              className="register-input"
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
            />
          </div>
          <div>
            <p className="register-para">Confirm Password:</p>
            <input
              className="register-input"
              onChange={handleChange}
              type="password"
              name="password2"
              value={password2}
            />
          </div>
          <button onClick={handlClick}>Submit</button>
          <span>
            <p>Already a users?</p>
            <button onClick={handlePush} className="register-btn">
              Login
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  register,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
