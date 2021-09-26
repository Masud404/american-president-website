import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {};
    // total-salary
    let total = 0;
    for (const president of cart) {
        total = total + president.salary;
    }
    return (
        // cart-area
        <div>
            <h3><span className="span-color">President Added:</span> {cart.length}</h3>



            <div>
                {
                    cart.map((president, key) => <li
                        key={key}
                    >
                        {president.president}
                    </li>)
                }
            </div>



            <h4><span className="span-color">Total Salary:</span> ${total}</h4>
            <button className="buy-now-btn">Buy Now</button>
        </div>
    );
};

export default Cart;