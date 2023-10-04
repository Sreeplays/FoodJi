import React from "react";

import CustomNavbar from "./Components/CustomNavbar.jsx";
import { Route, Routes } from "react-router-dom";
import OrderYourFood from "./Components/OrderYourFood.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <>
    <CustomNavbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FoodJi/order" element={<OrderYourFood />} />
    </Routes>
    </>
  );
}

export default App;
