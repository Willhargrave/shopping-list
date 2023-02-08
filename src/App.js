import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
