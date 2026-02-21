import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = { items: [], totalAmount: 0 };
const cartLogic = (state, action) => {
  console.log(action, "ACTION");
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.items.amount * action.items.quantity;

      let updatedItems;
      updatedItems = state.items.concat(action.items);
      console.log(state.items, "UPDATED ITEMS");

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [itemState, dispatchItem] = useReducer(cartLogic, initialState);
  const addItemhandler = (itemData) => {
    dispatchItem({ type: "ADD", items: itemData });
  };
  const removeItemHandler = () => {};

  const itemObj = {
    items: itemState.items,
    amount: itemState.totalAmount,
    addItem: addItemhandler,
    removeItem: removeItemHandler,
  };
  return <CartContext value={itemObj}>{children}</CartContext>;
};

export default CartProvider;
