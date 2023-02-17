import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Navbar from "./components/Navbar";
import { Provider } from "./components/ItemContext";
const App = () => {
  return (
    <div>
      <Provider>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
