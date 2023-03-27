import React from 'react';
import './Header.css'
import '../../images/Logo.svg'



const Header = () => {
    return (
        <nav className='header'>
            <div>image</div>
           <div>
           <a href="/shop">shop</a>
            <a href="/order">order</a>
            <a href="inventory">inventory</a>
            <a href="/login">Login</a>
           </div>
            
        </nav>
    );
};

export default Header;