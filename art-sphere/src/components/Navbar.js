
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/art-gallery">Art Gallery</Link></li>
        <li><Link to="/art-works">Art Works</Link></li>
        <li><Link to="/artists">Artists</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        {/* <li><Link to="/notification">Notification</Link> </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
