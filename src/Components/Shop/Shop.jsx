import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[]);
   useEffect(()=>{
    const storedCart = getShoppingCart();
    const saveCart =[];
    //step 1 get id of the addedproduct
    for(const id in storedCart){
        // step 2product from product by using id
        const addedProduct = product.find(product=>product.id===id);
        if(addedProduct){
            //step 3 add quentity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: add the adder product to the saved cart
            saveCart.push(addedProduct);
        }
        console.log('addedProduct',addedProduct);

    }
    //step 5 set the cart
    setCart(saveCart);
   },[product])
    const handlerAddToCart = (product) =>{
        const newCart =[...cart,product];
        setCart(newCart);
        addToDb(product.id)
        
    }

  const handleClearCart =()=>{
    setCart([]);
    deleteShoppingCart();
  }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    product.map(product=><Product 
                        key={product.id}
                        product = {product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
               <Cart 
               cart={cart}
               handleClearCart={handleClearCart}
               >
               <Link to ='/orders'>
                <button className='btn-proceed'>Review Order</button>
               </Link>
               </Cart>

            </div>
            
        </div>
    );
};

export default Shop;