import React from "react";

import CartIcon from "../../../assets/Images/cart.png";
import CartModal from "../../UI/Modal/CartModal/CartModal";
import CartContent from "../CartContent/CartContent";
import navStyle from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <CartModal
        className={`flex items-center justify-center gap-2 bg-black border-[lime] hover:bg-[#1f1f1f] transition-all duration-300 hover:scale-[1.1] ${navStyle.buttonStyle}`}
        content={<CartContent />}
        id="CartID"
      >
        <img src={CartIcon} alt="Cart" className={`h-8 ${navStyle.pic}`} />
        <span className="text-xl text-[#6fff6f]">69</span>
      </CartModal>
    </>
  );
};

export default Navbar;
