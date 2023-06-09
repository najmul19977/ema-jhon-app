import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedcart = useLoaderData();
    const [cart,setCart]=useState(savedcart);

    const handleRemoveFromCart = (id) =>{
        console.log(id);
        const remaining = cart.filter(product=>product.id !==id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    console.log(savedcart);
    
    return (
        <div className='shop-container'>
            <div className='review-Container'>
               {
               cart.map(product=><ReviewItems
                key={product.id}
                product={product}
                handleRemoveFromCart ={handleRemoveFromCart}
                ></ReviewItems>)
               }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                
                >
                    <Link to ="/checkout" >
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;