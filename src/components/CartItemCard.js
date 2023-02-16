import React, { useContext } from "react"
import { useState, createContext, useContext } from "react";
import ItemContext from "./ItemContext";

const CartItemCard = (props) => {
    const [cartitem] = useContext(ItemContext)
    return (
        <div>
            <img src={cartitem.img} alt=''></img>
            <div class="info">
                <h4>{cartitem.name}</h4>
                <p class="quantity">Quantity: 1</p>
            </div>
        </div>
    )
}

export default CartItemCard;