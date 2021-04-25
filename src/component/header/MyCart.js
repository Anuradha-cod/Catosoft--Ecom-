import React, { useState } from "react";
import { FaChevronDown, AiOutlineShoppingCart, FaSearch } from "react-icons/ai";

const MyCart = ({ setMyCart, myCart }) => {
  // const [myCart, setMyCart] = useState(false);

  return (
    <div className="cart" onClick={() => setMyCart(true)}>
      <div className="cart-mycart">
        <h4 className="cartIcon"> My Cart</h4>

        <AiOutlineShoppingCart size={25} className="cartIcon" />
      </div>
    </div>
  );
};

export default MyCart;
