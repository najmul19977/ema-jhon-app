import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({product,handleRemoveFromCart}) => {
    const {id,name,img,price,quantity}=product
    return (
        <div className='Review-items'>
            <img src={img} alt="" />
            <div className='review-detsils'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-ext'>${price}</span> </p>
                <p>Quantity:<span className='orange-ext'>{quantity}</span></p>

            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>Delete</button>
        </div>
    );
};

export default ReviewItems;