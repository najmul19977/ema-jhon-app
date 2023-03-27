import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    //const cart = props.cart;//option 1
    //const {cart} =props //option 2
    console.log(cart);
    let total = 0;
    for(const product of cart){
        total =total + product.price;

    }
    
    return (
        <div className='cart'>
            <h2>Order Sumary</h2>
            <p>Selected items:{cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Total Shopping:</p>
            <p>Tax:</p>
            <h5>Grand Total:</h5>
        </div>
    );
};

export default Cart;