import React from "react";

import CartIcon from "../../../assets/Images/cart.png";
const Navbar = () => {
  return (
    <>
      <button
        className="btn p-3 flex items-center justify-center border-[lime]"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <img src={CartIcon} alt="Cart" className="h-8" />
        <span className="text-xl text-[#6fff6f]">69</span>
      </button>
    </>
  );
};

export default Navbar;
