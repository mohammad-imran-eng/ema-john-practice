import React from 'react';
import { Button } from 'react-bootstrap'

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    return (
        <div style={{ marginLeft: '20px', borderBottom: '1px solid lightgray', marginTop: '20px' }}>
            <h4 style={{ color: 'blue', fontSize: '16px' }}>{name}</h4>
            <p>Quantity: {quantity}</p>
            <small>${price}</small>
            <br /> <br />
            <Button onClick={() => props.removeProduct(key)} variant="warning">Remove</Button>
            <br /> <br />
        </div>
    );
};

export default ReviewItem;