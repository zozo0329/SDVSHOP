import React from "react";
import MainHeader from "./Components/HeaderContent/MainHeader/MainHeader";
import Main from "./Components/MainContent/Main/MainFiles/Main";
import MainFooter from "./Components/FooterContent/MainFooter/MainFooter";
// import CartProvider from "./Store/CartProvider";

const App = () => {
  return (
    <div>
      <MainHeader />
      <Main />
      <MainFooter />
    </div>
  );
};

export default App;
