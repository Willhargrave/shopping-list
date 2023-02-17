import React, {useState, useContext} from "react";
import Sushi from "./Sushi";
import ItemContext from "./ItemContext";
import { useParams, Link} from "react-router-dom";
function DisplaySushi() {
    const [cartItems, setCartItems] = useContext(ItemContext)
    console.log(Number(useParams))
    const { id } = useParams()
    const sushi = Sushi.find((p) => p.key === id);
 
    const handleSubmit = () => {
        setCartItems(cartItems.concat({
            product: sushi
        }))
   
    }
    return (
        <div>
            
            
            <h1>{sushi.name}</h1>
            <img src={sushi.img}></img>
            <Link to={'/'}>
              <button onClick={handleSubmit}>Add to Cart</button>
            </Link>
        </div>
    )
}

export default DisplaySushi;

