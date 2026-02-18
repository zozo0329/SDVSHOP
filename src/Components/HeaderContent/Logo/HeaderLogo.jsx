import React from "react";

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-5">
      <img
        src="https://stardewvalleywiki.com/mediawiki/images/9/94/Pierre_Annoyed.png"
        alt="Pierre"
        className="h-13 rounded-2xl"
      />
      <h1 className="text-4xl cursor-default text-[#11ff4d]">Blackmarket</h1>
    </div>
  );
};

export default HeaderLogo;
