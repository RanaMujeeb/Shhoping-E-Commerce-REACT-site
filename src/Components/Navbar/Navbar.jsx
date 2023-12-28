import React, { useState } from 'react';
import './Navbar.css';
import s1 from '../Assets/s1.png';
import cart from '../Assets/cart.png';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [clickedItem, setClickedItem] = useState(0);

    const handleItemClick = (index) => {
        setClickedItem(index);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={s1} alt="Logo" />
            </div>
            <ul className='nav-menu'>
                <li onClick={() => handleItemClick(0)}>
                  <Link to="/" className='links'>Shop</Link>{clickedItem === 0 && <hr />}
                </li>
                <li onClick={() => handleItemClick(1)}>
                   <Link to="/mens" className='links'> Men</Link> {clickedItem === 1 && <hr />}
                </li>
                <li onClick={() => handleItemClick(2)}>
                   <Link to="/womens" className='links'> Women</Link> {clickedItem === 2 && <hr />}
                </li>
                <li onClick={() => handleItemClick(3)}>
                   <Link to="/kids" className='links'> Kids </Link>{clickedItem === 3 && <hr />}
                </li>
            </ul>
            <div className="cart">
               <Link to="/login"> <button>Login</button></Link>
               <Link to="/cart"><img src={cart} alt="cart" /></Link> 
                <div className="cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
