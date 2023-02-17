import { useContext } from "react";
import ItemContext from "./ItemContext";
import CartItemCard from "./CartItemCard";
import Sushi from "./Sushi";
const CheckoutOrder = () => {
const [cartItems] = useContext(ItemContext)
    return (
        <div>
            <div className="container1">
                <div className="order">
                    <h2>Your order summary</h2>
                    <div className="item">
                        <div className="info">
                         <CartItemCard key={Sushi.id} sushi={Sushi} />
                        </div>
                    </div>
                    <h4 className="ship">Shipping: FREE</h4>
                    <hr></hr>
                    <h3 className="total">TOTAL: 60.91€</h3>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrder;