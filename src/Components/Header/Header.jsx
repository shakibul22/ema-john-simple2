import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header' >
           <img src={logo} alt="" />
           <div className='header-a'>
             <a href="/shop">shop</a>
             <a href="/order">Order</a>
             <a href="/inventory">Inventory</a>
             <a href="/login">Login</a>
           </div>
        </div>
    );
};

export default Header;