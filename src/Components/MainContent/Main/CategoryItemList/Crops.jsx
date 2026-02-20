import React from "react";
import CardItem from "../../../UI/Card/CardItem";
// import ItemDetails from "../../ItemDetails/ItemDetails";
const Crops = ({ content }) => {
  return (
    <>
      {content.map((item) => {
        console.log(item, "ITEM");
        return (
          <CardItem
            key={item.id}
            cardTitle={item.name}
            cardAmount={item.amount}
            itemImage={
              <img src={item.image} alt={item.name} className="h-13 w-13" />
            }
          >
            <button className="btn border-[lime] bg-black text-[lime] transition-all duration-150 hover:scale-[1.1] hover:bg-[#1f1f1f]">
              BUY
            </button>
          </CardItem>
        );
      })}
    </>
  );
};

export default Crops;
