import React from "react";
import CategoryStyle from "./Category.module.css";
const Category = ({ name, image }) => {
  return (
    <>
      <div className={`flex flex-col items-center gap-3`}>
        <img src={image} alt={name} className={`h-20 ${CategoryStyle.image}`} />
        <h1 className={`text-2xl ${CategoryStyle.name}`}>{name}</h1>
      </div>
    </>
  );
};

export default Category;
