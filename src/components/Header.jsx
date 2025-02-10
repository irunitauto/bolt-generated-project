import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">AllRecipy</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">All Recipes</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
        <div className="search-box">
          <input type="text" placeholder="Search for recipes, ingredients, or categories..." />
          <button type="submit"><FaSearch /></button>
        </div>
        <div className="contact-button">
          <button>Contact Us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
