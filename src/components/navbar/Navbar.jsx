import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
  <div className="portfolio__navbar">
    <div className="portfolio__navbar-links">
      <div className="portfolio__navbar-links_logo">
        <h1>SAJMO</h1>
      </div>
      <div className="portfolio__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#blog">Blog</a></p>
        <p><a href="#connect">Connect</a></p>
      </div>
    </div>
  </div>
  )
};

export default Navbar;
