import React, { useContext } from "react";
// import CartModal from "../../UI/Modal/CartModal/CartModal";
import CartContext from "../../../Store/CartContext";
import Cart from "./Cart";
const CartContent = () => {
  const cartCtx = useContext(CartContext);
  // const plusHandler = (item) => {
  //   cartCtx.addItem({ ...item, amount: 1 });
  // };
  console.log(cartCtx, "CARTCTX");
  const items = cartCtx.items;
  return (
    <>
      {items.map((item) => (
        <Cart item={item} cartCtx={cartCtx} />
      ))}
    </>
  );
};

export default CartContent;
