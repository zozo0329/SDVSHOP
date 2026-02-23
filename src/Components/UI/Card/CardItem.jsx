import React from "react";
import cropsStyle from "../../MainContent/Main/CategoryItemList/Crops.module.css";
const CardItem = ({
  itemImage,
  children,
  cardTitle,
  cardAmount,
  className,
}) => {
  return (
    <div className={` ${className}`}>
      <figure className={cropsStyle.cropss}>{itemImage}</figure>
      <div className="card-body  flex flex-wrap flex-col justify-center items-center">
        <h2 className="card-title text-center">{cardTitle}</h2>
        <p className="text-lg m-0 p-0">
          <span className="text-[yellow]">G</span>
          {cardAmount}
        </p>
        <div className="card-actions">{children}</div>
      </div>
    </div>
  );
};

export default CardItem;
