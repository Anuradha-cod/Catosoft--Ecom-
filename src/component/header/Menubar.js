import React from "react";
import { FiAlignJustify } from "react-icons/fi";

const Menubar = ({ setMenubarVisibility }) => {
  return (
    <div>
      <FiAlignJustify
        className="menubar"
        size={20}
        onClick={() => setMenubarVisibility(true)}
      />
    </div>
  );
};

export default Menubar;
