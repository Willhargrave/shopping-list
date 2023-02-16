const CheckoutOrder = () => {
    return (
        <div>
            <div class="container1">
                <div class="order">
                    <h2>Your order summary</h2>
                    <div class="item">
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/balle.png' alt=''></img>
                        <div class="info">
                            <h4>Trixie Soccer Ball, Vinyl</h4>
                            <p class="quantity">Quantity: 1</p>
                            <p class="price">1.99€</p>
                        </div>
                    </div>

                    <div class="item">
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/frisbee.png' alt=''></img>
                            <div class="info">
                                <h4>Trixie Dog Activity Dog Disc</h4>
                                <p class="quantity">Quantity: 3</p>
                                <p class="price">26.97€</p>
                            </div>
                    </div>

                    <div class="item">
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/harnais.png' alt=''></img>
                            <div class="info">
                                <h4>Julius K9 Powerharness, Mini/M</h4>
                                <p class="quantity">Quantity: 1</p>
                                <p class="price">31.95€</p>
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