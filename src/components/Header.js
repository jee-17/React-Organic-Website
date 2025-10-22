// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; 
// NOTE: I recommend creating a separate Header.css file for cleaner styling
// import './Header.css'; 

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu after a link is clicked (optional but good for UX)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="header-bar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-wrapper">
        
        {/* Logo/Home Link */}
        <div className="logo">
          {/* Note: In a real app, external styles should be moved to CSS for best practice */}
          <Link to="/" onClick={closeMenu}>
            Harvest Moon Organics
          </Link>
        </div>

        {/* 🍔 Mobile Menu Toggle Button (Visible only on small screens via CSS) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {/* You can use an icon library here, but a simple div works with CSS too */}
          {isMenuOpen ? '✕' : '☰'} 
        </div>

        {/* Navigation Links (Conditionally rendered/styled based on isMenuOpen and CSS) */}
        {/* The 'nav-links' class now handles the responsiveness in CSS */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/shop" onClick={closeMenu}>Shop</Link>
          <Link to="/story" onClick={closeMenu}>Our Story</Link>
          <Link to="/certifications" onClick={closeMenu}>Certifications</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/account" onClick={closeMenu}>My Account</Link>
        </nav>

        {/* User Actions (The CSS will ensure this stays visible/repositioned) */}
        <div className="user-actions">
          <Link to="/account" onClick={closeMenu}>My Account</Link>
          <span className="cart-icon">🛒</span> 
        </div>
      </div>
    </motion.header>
  );
};

export default Header;