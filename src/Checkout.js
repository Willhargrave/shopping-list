import React from "react";
import CheckoutMenu from "./components/CheckoutMenu";
import CheckoutOrder from "./components/CheckoutOrder";
import "./styles/Checkout.css"
const Checkout = () => {

    return (
        <div className="Checkoutgrid">
            <CheckoutMenu />
            <CheckoutOrder />
        </div>
    )
}

export default Checkout;