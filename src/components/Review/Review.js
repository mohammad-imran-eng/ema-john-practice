import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPleaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () => {
        history.push('/shipment');
    }
    const removeProduct = (productkey) => {
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    let thankyou;
    if (orderPleaced) {
        thankyou = <img src={happyImage} alt="" />
    }

    return (
        <div className="twin-container">
            {
                thankyou
            }
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
                </Cart>

            </div>
        </div>
    );
};

export default Review;