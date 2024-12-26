import {Link} from 'react-router-dom';
import React from 'react';
import './css/Navbar.css'
const Navbar=()=>{
    return(
       <nav className='nav'>
        <ul>
       <li><Link to="/" >Home</Link></li> 
       <li><Link to="/about">What we do</Link></li> 
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/tuition">Tuition centers</Link></li>
        </ul>
       </nav>
    )
}

export default Navbar;
