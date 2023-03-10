import { useContext } from "react";
import ItemContext from "./ItemContext";
import CartItemCard from "./CartItemCard";
import Sushi from "./Sushi";
import "../styles/Checkoutorder.css"
const CheckoutOrder = () => {
const [cartItems] = useContext(ItemContext)

    return (
        <div>
            <div className="container1">
                    <h2>Thank You!</h2>
                    <hr></hr>
                    <div>
                         <CartItemCard key={Sushi.id} sushi={Sushi} />
                    </div>
                    <h4 className="ship">Delivery: FREE</h4>
                    <hr></hr>
                    <h3 className="total">￥{cartItems.length * 300}</h3>
            </div>
        </div>
    )
}

export default CheckoutOrder;