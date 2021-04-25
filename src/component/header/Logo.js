import React from "react";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();
  const handlClick = () => {
    history.push("/");
  };
  return (
    <div className="logo">
      <img
        onClick={handlClick}
        className="logo-img"
        src="https://c1.neweggimages.com/WebResource/Themes/Nest/logos/logo_424x210.png"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
