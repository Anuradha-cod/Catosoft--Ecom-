import React from "react";
import { useHistory } from "react-router-dom";

const MenubarContent = ({ setMenubarVisibility, setMyCart }) => {
  const history = useHistory();
  const handlClick = () => {
    history.push("/register");
  };
  return (
    <div
      className="menubar-content container"
      onClick={() => setMenubarVisibility(false)}
    >
      <div className="welcome">Welcome Here...</div>
      <p onClick={() => history.push("/login")}>Login</p>
      <p onClick={handlClick}>Sign Up</p>
      <p onClick={() => setMyCart(true)}>Cart</p>
    </div>
  );
};

export default MenubarContent;
