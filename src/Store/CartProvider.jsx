import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = { items: [], totalAmount: 0 };
const cartLogic = (state, action) => {
  // console.log(action, "ACTION");
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.items.amount * action.items.quantity;

      const existingItemIndex = state.items.findIndex(
        (ITEM) => ITEM.id === action.items.id,
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        // console.log(existingItem, "EXISTING ITEM");

        updatedItems = [...state.items];

        const updatedItemData = {
          ...existingItem,
          quantity: existingItem.quantity + action.items.quantity,
        };
        // console.log(updatedItems[existingItemIndex], "UPDATEDITEMDATA");

        updatedItems[existingItemIndex] = updatedItemData;
        // console.log(updatedItems[existingItemIndex], "AFTEr", updatedItems);
      } else {
        updatedItems = state.items.concat(action.items);
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE": {
      const existingItemIndex = state.items.findIndex(
        (ITEM) => ITEM.id === action.id,
      );

      if (existingItemIndex === -1) {
        return state;
      }

      const existingItem = state.items[existingItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.amount;

      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((ITEM) => !(ITEM.id === action.id));
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [itemState, dispatchItem] = useReducer(cartLogic, initialState);
  console.log(itemState, "ITEMSTATE");
  const addItemhandler = (itemData) => {
    dispatchItem({ type: "ADD", items: itemData });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE", id });
  };

  const itemObj = {
    items: itemState.items,
    amount: itemState.totalAmount,
    addItem: addItemhandler,
    removeItem: removeItemHandler,
  };
  return <CartContext value={itemObj}>{children}</CartContext>;
};

export default CartProvider;
