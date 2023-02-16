import React from "react";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css";
import { useState, createContext, useContext } from "react";
import ItemContext from "./components/ItemContext";
const Home = () => {
    const [cartItems, setCartItems] = useContext(ItemContext)
    function handleClick() {
        setCartItems(cartItems.concat({
            product: Sushi
          }))
    }
    return (
        <div>
            <div className='Grid'>
                {Sushi.map((sushi) => <Card key={sushi.id} sushi={sushi} handleClick={handleClick} />)}
            </div>
        </div>

    )
}

export default Home;