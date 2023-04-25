import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const Header = () => {
    const {user,logout} = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () =>{
        logout()
        .then(result =>{})
        .catch(error =>console.error(error));

    }
    return (
        <nav className='header'>
            <div><img src={logo} alt="" /></div>
           <div>
            <Link  to ="/">shop</Link>
            <Link  to ="/orders">orders</Link>
            <Link  to ="inventory">inventory</Link>
            <Link  to ="/login">Login</Link>
            <Link  to ="/signup">Sign Up</Link>
            {user && <span>Wellcome {user.displayName} <button onClick={handleLogOut}>Sign Out</button></span>}
           </div>
            
        </nav>
    );
};

export default Header;