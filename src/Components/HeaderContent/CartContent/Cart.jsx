import React from "react";

const Cart = ({ item, cartCtx }) => {
  const plusHandler = () => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const minusHandler = () => {
    console.log(item, "123123123");
    cartCtx.removeItem(item.id);
  };
  return (
    <div className="bg-black flex justify-between items-center gap-10 p-7.5 rounded-[20px]">
      <div className="flex items-center gap-5">
        <img src={item.image} alt={item.name} />
        <p className="text-2xl">{item.name}</p>
        <p className="text-2xl">
          <span className="text-[yellow]">G</span>
          {item.amount}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl">x{item.quantity}</p>
        <div className="flex items-center gap-3">
          <button
            className="btn border-[lime] bg-black text-[lime] text-xl p-3"
            onClick={() => {
              minusHandler();
            }}
          >
            -
          </button>
          <button
            className="btn border-[lime] bg-black text-[lime] text-xl p-3"
            onClick={() => {
              plusHandler();
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
