import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
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
        <Route path="/shopping-list" element={<Home/>} />
        <Route exact path='/shopping-list/:id' element={<DisplaySushi/>} />
        <Route path="/shopping-list/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
};

export default App;
