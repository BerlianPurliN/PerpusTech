import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="../photo/logo.png" alt="Logo" className="logo" />
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;