import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Navbar from "./components/Navbar";
import CartContext from "./components/CartContext";
const App = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
      setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <CartContext.Provider value={count}>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} handleClick={handleClick}/>
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    </div>
  );
};

export default App;
