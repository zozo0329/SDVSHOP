import React, { useContext } from "react";
// import CartModal from "../../UI/Modal/CartModal/CartModal";
import CartContext from "../../../Store/CartContext";
const CartContent = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx, "CARTCTX");
  const items = cartCtx.items;
  return (
    <>
      <div className="bg-black flex justify-between items-center gap-10 p-7.5 rounded-[20px]">
        <div className="flex items-center gap-5">
          <img
            src="https://stardewvalleywiki.com/mediawiki/images/e/e9/Coffee.png"
            alt="#"
          />
          <p className="text-2xl">{items.name}</p>
          <p className="text-2xl">
            <span className="text-[yellow]">G</span>
            {items.amount}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl">{items.quantity}x</p>
          <div className="flex items-center gap-3">
            <button className="btn border-[lime] bg-black text-[lime] text-xl p-3">
              -
            </button>
            <button className="btn border-[lime] bg-black text-[lime] text-xl p-3">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
