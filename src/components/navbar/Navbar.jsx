import React, { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';

import './navbar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">SpaceTec</a>
        </div>
        <div className="nav-links-container">
          <IoMenu className="menu-toggle" onClick={toggleMenu} />

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                <FaRegCircleUser className="user-icon" />▼
              </button>
              <div
                className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}
              >
                <a href="#login">Login</a>
                <a href="#register">Register</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
