import React from 'react';
import './Product.css'

const Product = (props) => {
    //console.log(props.product);
    const {img,name,seller,ratings,quantity,price} = props.product;
   const handlerAddToCart=props.handlerAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings}</p>
          </div>
          <button onClick={()=> handlerAddToCart(props.product)} className='button-card'>Add To Card </button>
        </div>
    );
};

export default Product;