import React from "react";
import titleStyle from "./Title.module.css";
const Title = () => {
  return (
    <div className={titleStyle.titleee}>
      <img
        src="https://stardewvalley.net/wp-content/uploads/2017/12/main_logo.png"
        alt="Title"
        className="p-10"
      />
    </div>
  );
};

export default Title;
