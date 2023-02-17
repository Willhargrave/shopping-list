import { useState, createContext, useContext } from "react";
import ItemContext from "./ItemContext";

const CartItemCard = () => {
    const [cartitem] = useContext(ItemContext)
    return (
        <div>
            {cartitem.map((sushi, idx) => {
                return (
                    <div key={idx}>
                        <img src={sushi.product.img} alt='' />
                        <div className="info">
                            <h4>{sushi.product.name}</h4>
                            <p className="quantity">{cartitem.name}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default CartItemCard;