import React, {useState, useContext} from "react";
import Sushi from "./Sushi";
import ItemContext from "./ItemContext";
import { useParams, Link} from "react-router-dom";
function DisplaySushi() {
    const [cartItems, setCartItems] = useContext(ItemContext)
    console.log(Number(useParams))
    const { id } = useParams()
    let sushi = Sushi.find((p) => p.key === id);
    console.log(sushi)

    // const {id} = useParams();
    // const product = Sushi.find((p) => String(p._id) === id);
    // const handleSubmit = () => {
    //     setCartItems(cartItems.concat({
    //         product: sushi
    //     }))
   

    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <h1>{sushi.name}</h1>
        </div>
    )
}

export default DisplaySushi;

// function ProductScreen() {
//     const { id } = useParams();
//     const product = products.find((p) => String(p._id) === id);
  
//     if (!product) return null; // or fallback UI
  
//     return (
//       <div>
//         {product.name}
//       </div>
//     );