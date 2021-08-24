import React from 'react';
import '../Product/Product.css'

const Cart = props => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);

    let shipping = 0;
    if (total > 0) {
        shipping = 12.99;
    }
    else if (total > 15) {
        shipping = 12.99;
    }
    else if (total > 35) {
        shipping = 4.99;
    }
    const tax = (total / 10)
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div style={{ marginLeft: '20px' }}>
            <h4>Order Summary</h4>
            <p>Items Order: {cart.length}</p>
            <p>Shipping Cost: {shipping}</p>
            <p> <small>Tax + VAT: {formatNumber(tax)}</small> </p>
            <p>Total Price: {grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;