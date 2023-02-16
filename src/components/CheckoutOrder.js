import { useContext } from "react";
import ItemContext from "./ItemContext";

const CheckoutOrder = () => {
const [cartItems] = useContext(ItemContext)
    return (
        <div>
            <div class="container1">
                <div class="order">
                    <h2>Your order summary</h2>
                    <div class="item">
                        <div class="info">
                         {cartItems.map}
                        </div>
                    </div>



                    <h4 class="ship">Shipping: FREE</h4>
                    <hr></hr>
                    <h3 class="total">TOTAL: 60.91€</h3>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrder;