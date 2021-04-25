import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
import "./Header.css";
import MyCart from "./MyCart";
import SearchContent from "./SearchContent";
import LoginContain from "./LoginContain";
import MyCartContain from "./MyCartContain";
import Menubar from "./Menubar";
import MenubarContent from "./MenubarContent";

const Header = ({ context }) => {
  const [searchHide, setSearchHide] = useState(false);
  const [login, setLogin] = useState(false);
  const [myCart, setMyCart] = useState(false);
  const [menubarVisibility, setMenubarVisibility] = useState(false);

  return (
    <div className="header-flex container">
      <div className="first-header">
        <Logo />
        <div className="first-header-mobile">
          <Menubar setMenubarVisibility={setMenubarVisibility} />
          {menubarVisibility && (
            <MenubarContent
              setMenubarVisibility={setMenubarVisibility}
              setMyCart={setMyCart}
            />
          )}

          <MyCart setMyCart={setMyCart} myCart={myCart} />
          {myCart && <MyCartContain setMyCart={setMyCart} />}
        </div>

        <div className="flex-search">
          <Search setSearchHide={setSearchHide} context={context} />
          {searchHide && (
            <SearchContent setSearchHide={setSearchHide} context={context} />
          )}
        </div>
      </div>

      <Login setLogin={setLogin} />
      {login && <LoginContain setLogin={setLogin} />}

      <MyCart setMyCart={setMyCart} myCart={myCart} />
      {myCart && <MyCartContain setMyCart={setMyCart} />}
    </div>
  );
};
export default Header;
