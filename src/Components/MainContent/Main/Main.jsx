import React from "react";
import mainStyle from "./Main.module.css";
import Title from "../Title/Title";
import CategoryList from "./Category/CategoryList";
const Main = () => {
  return (
    <div>
      <div className={mainStyle.default}>
        <Title />
      </div>
      <div className="flex flex-col justify-center items-center p-10px bg-black">
        <h1 className={`text-8xl mt-20 cursor-default ${mainStyle.store}`}>
          STORE
        </h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default Main;
