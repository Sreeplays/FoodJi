import React from "react";

import CustomNavbar from "./Components/CustomNavbar.jsx";
import { Route, Routes } from "react-router-dom";
import OrderYourFood from "./Components/OrderYourFood.jsx";
import Home from "./Components/Home.jsx";
import Checkout from "./CHILD/Checkout.jsx";
import { AppProvider } from "./globalContext/AppProvider";
import { Link, animateScroll as scroll } from "react-scroll";
import { AuthContextProvider } from "./FireBase-Data-Config/AuthContext.js";
import Protected from "./FireBase-Data-Config/protected.js";
import Contact from "./Components/About.jsx";
import Account from "./Components/Account.jsx";
function App() {
  return (
    <AuthContextProvider>
    <AppProvider>
    <CustomNavbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Protected> <OrderYourFood /> </Protected>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Protected> <Account /> </Protected>} />
    </Routes>
    </AppProvider>
    </AuthContextProvider>
  );
}

export default App;
