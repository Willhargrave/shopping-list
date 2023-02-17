import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sushi from "./components/Sushi";
import Checkout from "./Checkout";
import Navbar from "./components/Navbar";
import { Provider } from "./components/ItemContext";
import DisplaySushi from "./components/DisplaySushi";
const App = () => {
  return (
    <div>
      <Provider>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path='/:id' element={<DisplaySushi/>} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
