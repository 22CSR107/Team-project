// src/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎓 College Portal</h2>
      <ul className="nav-links">
        <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
       
        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
        <li><NavLink to="/signup" activeClassName="active-link">Signup</NavLink></li>
        <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
