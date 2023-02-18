import { useState, createContext, useContext } from "react";
import ItemContext from "./ItemContext";
import "../styles/Checkout.css"
import "../styles/Checkoutorder.css"
const CartItemCard = () => {
    const [cartitem] = useContext(ItemContext)
    return (
        <div className="order-card">
            {cartitem.map((sushi, idx) => {
                return (
                    <div key={idx}>
                        <div className="order-info">
                        <img src={sushi.product.img} alt='' className="order-img"/>
                        <h4>{sushi.product.name}</h4>
                        </div>    
                    </div>
                )
            })}


        </div>
    )
}

export default CartItemCard;