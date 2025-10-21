// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'; 

const Header = () => {
  return (
    <motion.header 
      className="header-bar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0' }}>
        
        {/* Logo/Home Link */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)' }}>
            Harvest Moon Organics
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/shop" style={{ margin: '0 15px' }}>Shop</Link>
          <Link to="/story" style={{ margin: '0 15px' }}>Our Story</Link>
          <Link to="/certifications" style={{ margin: '0 15px' }}>Certifications</Link>
          <Link to="/blog" style={{ margin: '0 15px' }}>Blog</Link>
          <Link to="/contact" style={{ margin: '0 15px' }}>Contact</Link>
        </nav>

        {/* User Actions */}
        <div className="user-actions">
          <Link to="/account">My Account</Link>
          <span className="cart-icon" style={{ marginLeft: '20px', fontSize: '20px' }}>🛒</span> 
        </div>
      </div>
    </motion.header>
  );
};

export default Header;