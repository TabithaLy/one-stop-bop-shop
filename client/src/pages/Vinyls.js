import React from "react";
import VinylList from "../components/VinylList";
import Header from "../components/Header"
//import Cart from "../components/Cart";

const Vinyls = () => {
  return (
    <div className="container">
      <Header/>
      <VinylList />
    </div>
  );
};

export default Vinyls;