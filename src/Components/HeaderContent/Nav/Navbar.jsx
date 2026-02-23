import React, { useContext } from "react";

import CartIcon from "../../../assets/Images/cart.png";
import CartModal from "../../UI/Modal/CartModal/CartModal";
import CartContent from "../CartContent/CartContent";
import navStyle from "./Navbar.module.css";
import CartContext from "../../../Store/CartContext";
const Navbar = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx, "ITEMSSSSssssssssssss");
  const isCartEmpty = cartCtx.items.length === 0;

  return (
    <>
      <CartModal
        disabled={isCartEmpty}
        className={`flex items-center justify-center gap-2 bg-black border-[lime] hover:bg-[#1f1f1f] transition-all duration-300 hover:scale-[1.1] ${navStyle.buttonStyle} ${isCartEmpty ? "cursor-not-allowed hover:scale-100 hover:bg-black" : "cursor-pointer"}`}
        content={
          <>
            <div className="flex flex-col justify-center items-center gap-5">
              <div>
                <h1 className="text-2xl text-[lime] bg-black p-5 rounded-2xl border-2 cursor-default">
                  YOUR CART:
                </h1>
              </div>
              <CartContent />
              <div className="flex flex-col justify-center items-center bg-[#181818] w-full p-5 rounded-2xl gap-5 cursor-default">
                <p className="text-[25px] underline ">
                  TOTAL:<span className="text-[yellow] text-[25px]">G</span>{" "}
                  {cartCtx.amount}
                </p>
                <button className=" bg-black p-3 rounded-2xl cursor-pointer border-2 transition-all duration-200 hover:scale-[1.1]">
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
