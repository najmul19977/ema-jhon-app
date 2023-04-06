import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    //const cart = props.cart;//option 1
    //const {cart} =props //option 2
    //console.log(cart);
    let total = 0;
    let totalShipping =0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity ===0){
            product.quantity =1;
        }
        //product.quantity = product.quantity || 1;
        total =total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = total*7/100;
    const grandTotal = total+ totalShipping+tax;
    
    return (
        <div className='cart'>
            <h2>Order Sumary</h2>
            <p>Selected items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;