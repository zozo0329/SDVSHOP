import React, { useContext } from "react";
// import CartModal from "../../UI/Modal/CartModal/CartModal";
import CartContext from "../../../Store/CartContext";
import Cart from "./Cart";
const CartContent = () => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx, "CARTCTX");
  const items = cartCtx.items;
  return (
    <>
      {items.map((item) => (
        <Cart
          item={item}
          cartCtx={cartCtx}
          className={`bg-black flex justify-between items-center gap-5 p-7.5 rounded-[20px] w-full`}
        />
      ))}
    </>
  );
};

export default CartContent;
