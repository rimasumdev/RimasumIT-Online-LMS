import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, crs) => total + crs.price, 0);
    const totalHours = cart.reduce((total, crs) => total + crs.duration, 0);

    return (
        <div className="header-summary">
            <h4>Enroll Summary</h4>
            <h6>Course Selected : {cart.length}</h6>
            <h6>Total Hours : {totalHours} Hours</h6>
            <h6>Total Price : Tk. {totalPrice}</h6>
            <br />
            <Button className="orderBtn" variant="secondary" size="lg" block>Place Order</Button>
        </div>
    );
};

export default Cart;