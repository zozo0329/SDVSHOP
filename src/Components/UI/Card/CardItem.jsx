import React from "react";

const CardItem = ({ itemImage, children, cardTitle, cardAmount }) => {
  return (
    <div className="card w-[40%] flex flex-col justify-center items-center bg-[#000000] gap-3 p-5">
      <figure className="">{itemImage}</figure>
      <div className="card-body  flex flex-wrap flex-col justify-center items-center gap-3">
        <h2 className="card-title text-center">{cardTitle}</h2>
        <p className="text-lg">
          <span className="text-[yellow]">G</span>
          {cardAmount}
        </p>
        <div className="card-actions">{children}</div>
      </div>
    </div>
  );
};

export default CardItem;
