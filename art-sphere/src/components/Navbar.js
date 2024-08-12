import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import custom CSS file for Navbar component

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/art-gallery">Art Gallery</Link></li>
        <li><a href="#art-works">Art Works</a></li>
        <li><a href="#artists">Artists</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#contacts">Contacts</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
