import React from "react";

import CustomNavbar from "./Components/CustomNavbar.jsx";
import { Route, Routes } from "react-router-dom";
import OrderYourFood from "./Components/OrderYourFood.jsx";
import Home from "./Components/Home.jsx";
import Checkout from "./CHILD/Checkout.jsx";
import { AppProvider } from "./globalContext/AppProvider";
import { Link, animateScroll as scroll } from "react-scroll";
function App() {
  return (
    <AppProvider>
    <CustomNavbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderYourFood />} />
    </Routes>
    </AppProvider>
  );
}

export default App;
