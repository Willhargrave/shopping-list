import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Navbar from "./components/Navbar";
import ItemContext from "./components/ItemContext";
const App = () => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <ItemContext.Provider value={[items, setItems]}>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </ItemContext.Provider>
    </div>
  );
};

export default App;
