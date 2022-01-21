import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/SajMo.png';

const Menu = () => { 
  return (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#connect">Connect</a></p>
  </>
)}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <div className="portfolio__navbar">
    <div className="portfolio__navbar-links">
      <div className="portfolio__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="portfolio__navbar-links_container">
        <Menu />
      </div>
      <div className="portfolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="porfolio__navbar-menu_container-links">
              <Menu />
            </div>
          </div>

        )}
      </div>
    </div>
  </div>
  )
};

export default Navbar;
