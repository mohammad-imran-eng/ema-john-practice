import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div style={{ padding: '10px' }}>
                <h6 style={{ color: 'blue' }}> <Link to={"/product/" + key}>{name}</Link> </h6>
                <p>by: {seller}</p>
                <strong>${price}</strong> <br /> <br />
                <small>only {stock} left in stock - order soon</small> <br /> <br />
                {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)} className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}

            </div>
        </div >
    );
};

export default Product;