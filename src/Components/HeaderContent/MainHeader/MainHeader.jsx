import React from "react";
import HeaderLogo from "../Logo/HeaderLogo";
import CartModal from "../../UI/Modal/CartModal/CartModal";
import Navbar from "../Nav/Navbar";
const MainHeader = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-[#00000080] sticky top-0 z-50">
      <HeaderLogo />
      <Navbar />
    </div>
  );
};

export default MainHeader;
