import React, { useContext } from "react";

import CartIcon from "../../../assets/Images/cart.png";
import CartModal from "../../UI/Modal/CartModal/CartModal";
import CartContent from "../CartContent/CartContent";
import navStyle from "./Navbar.module.css";
import CartContext from "../../../Store/CartContext";
const Navbar = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx, "ITEMSSSSssssssssssss");

  // const numberOfCartItems = cartCtx.items.reduce((totalItem, num) => {
  //   console.log(cartCtx.items, "TOTAL ITEM");
  //   return totalItem + num.quantity;
  // }, 0);

  return (
    <>
      <CartModal
        className={`flex items-center justify-center gap-2 bg-black border-[lime] hover:bg-[#1f1f1f] transition-all duration-300 hover:scale-[1.1] ${navStyle.buttonStyle}`}
        content={
          <>
            <div className="flex flex-col justify-center items-center gap-10">
              <CartContent />
              <div className="flex flex-col justify-center items-center bg-[#181818] w-full p-5 rounded-2xl">
                <p className="text-[23px]">Total: {cartCtx.amount}</p>
                <button className=" bg-black p-3 rounded-2xl cursor-pointer">
                  ORDER
                </button>
              </div>
            </div>
          </>
        }
        id="CartID"
      >
        <img src={CartIcon} alt="Cart" className={`h-8 ${navStyle.pic}`} />
        <span className="text-xl text-[#6fff6f]">{cartCtx.items.length}</span>
      </CartModal>
    </>
  );
};

export default Navbar;
