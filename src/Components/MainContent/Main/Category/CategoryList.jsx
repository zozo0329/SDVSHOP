import React from "react";
import CartModal from "../../../UI/Modal/CartModal/CartModal";
import Category from "./Category";
import ItemDetails from "../../ItemDetails/ItemDetails";
const CategoryList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {ItemDetails.map((categoryItem) => {
        return (
          <CartModal
            className={`border-[lime] border-[5px] rounded-[20px] h-50 w-50 cursor-pointer hover:scale-[1.1] transition-all duration-250`}
          >
            <Category
              key={categoryItem.id}
              name={categoryItem.name}
              image={categoryItem.img}
            />
          </CartModal>
        );
      })}
    </div>
  );
};

export default CategoryList;
