import React, { useContext } from "react";
import CardItem from "../../../UI/Card/CardItem";
import CartContext from "../../../../Store/CartContext";
import CropsStyle from "./Crops.module.css";

const Crops = ({ content }) => {
  const cartCtx = useContext(CartContext);
  const addItem = cartCtx.addItem;

  let quantity = 1;
  const buyHandler = ({ name, amount, image, id }) => {
    +quantity + 1;
    addItem({ name, amount, image, id, quantity });
  };
  return (
    <>
      {content.map((item) => {
        return (
          <CardItem
            className={`card w-[45%] h-90 flex flex-col justify-center items-center bg-[#000000] p-10 ${CropsStyle.CardModall}`}
            key={item.id}
            cardTitle={item.name}
            cardAmount={item.amount}
            itemImage={
              <img src={item.image} alt={item.name} className="w-13 h-13" />
            }
          >
            <button
              className="btn border-[lime] bg-black text-[lime] transition-all duration-150 hover:scale-[1.1] hover:bg-[#1f1f1f]"
              onClick={() => {
                buyHandler({
                  name: item.name,
                  amount: item.amount,
                  image: item.image,
                  id: item.id,
                });
              }}
            >
              BUY
            </button>
          </CardItem>
        );
      })}
    </>
  );
};

export default Crops;
