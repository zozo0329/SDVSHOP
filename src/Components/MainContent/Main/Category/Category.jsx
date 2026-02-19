import React from "react";
import CartModal from "../../../UI/Modal/CartModal/CartModal";
const Category = ({ name, image }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <img src={image} alt={name} className="h-20" />
        <h1 className="text-2xl">{name}</h1>
      </div>
    </>
  );
};

export default Category;
