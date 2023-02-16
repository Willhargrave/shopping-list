import React from "react";
import "../styles/Checkoutmenu.css"
const CheckoutMenu = () => {
    return (
        <div>
                    <div class="card">
                        <div class="leftside">
                            <img
                                src="https://cdn.rarejob.com/material/jitsuyo_eikaiwa/2018/03/12170840/L7_Ch4_L9_Main.png"
                                class="product"
                                alt="Shoes"
                            />
                        </div>
                        <div class="rightside">
                            <form action="">
                                <h1>CheckOut</h1>
                                <h2>Payment Information</h2>
                                <p>Cardholder Name</p>
                                <input type="text" class="inputbox" name="name" required />
                                <p>Card Number</p>
                                <input type="number" class="inputbox" name="card_number" id="card_number" required />

                                <p>Card Type</p>
                                <select class="inputbox" name="card_type" id="card_type" required>
                                    <option value="">--Select a Card Type--</option>
                                    <option value="Visa">Visa</option>
                                    <option value="RuPay">RuPay</option>
                                    <option value="MasterCard">MasterCard</option>
                                </select>
                                <div class="expcvv">

                                    <p class="expcvv_text">Expiry</p>
                                    <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                                    <p class="expcvv_text2">CVV</p>
                                    <input type="password" class="inputbox" name="cvv" id="cvv" required />
                                </div>
                                <p></p>
                                <button type="submit" class="button">CheckOut</button>
                            </form>
                        </div>
                    </div>
            </div>
    )
}

export default CheckoutMenu;