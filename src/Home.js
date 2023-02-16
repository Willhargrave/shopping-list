import React from "react";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css";
import { useState, createContext, useContext } from "react";
import CartContext from "./components/CartContext";
const Home = (props) => {
    const count = useContext(CartContext);
    return (
        <div>
            <div className='Grid'>
                {Sushi.map((sushi) => <Card key={sushi.id} sushi={sushi} handleClick={props.handleClick} />)}
            </div>
            <h1><span>{count}</span></h1>
        </div>
      
    )
}

export default Home;