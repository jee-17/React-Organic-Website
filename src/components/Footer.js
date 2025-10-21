// src/components/Footer.js (UPDATED with React Icons for Social Media)
import React from 'react';
import { Link } from 'react-router-dom';
// 💥 NEW: Import Icons for Social Media and Contact 💥
import { FaPhoneAlt, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
import '../App.css'; 

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '60px 0',
    borderTop: '1px solid #eee',
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '40px',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    color: 'var(--color-light-text)',
    marginBottom: '8px',
    fontSize: '14px',
    transition: 'color 0.3s ease',
  };
  
  const iconStyle = {
      color: 'var(--color-primary)', // Make social icons green
      fontSize: '20px',
      margin: '0 10px',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
  };

  return (
    <footer style={footerStyle}>
      <div className="content-wrapper">
        <div style={gridStyle}>
          
          {/* Shop Column */}
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Shop</h4>
            <Link to="/shop/groceries" style={linkStyle}>Groceries</Link>
            <Link to="/shop/personal-care" style={linkStyle}>Personal Care</Link>
            <Link to="/shop/supplements" style={linkStyle}>Supplements</Link>
            <Link to="/shop/seasonal" style={linkStyle}>Seasonal</Link>
          </div>

          {/* Learn Column */}
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Learn</h4>
            <Link to="/story" style={linkStyle}>Our Story</Link>
            <Link to="/certifications" style={linkStyle}>Certifications</Link>
            <Link to="/blog" style={linkStyle}>Blog</Link>
            <Link to="/faq" style={linkStyle}>FAQ</Link>
          </div>

          {/* Support Column */}
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Support</h4>
            <Link to="/contact" style={linkStyle}>Contact Us</Link>
            <Link to="/shipping" style={linkStyle}>Shipping & Returns</Link>
            <Link to="/terms" style={linkStyle}>Terms of Service</Link>
            <Link to="/privacy" style={linkStyle}>Privacy Policy</Link>
          </div>

          {/* Newsletter Column - UPDATED CONTENT */}
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '15px' }}>Newsletter</h4>
            <p style={{ color: 'var(--color-light-text)', fontSize: '14px' }}>Join our community for healthy updates!</p>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <input type="email" placeholder="Email" style={{ padding: '8px', border: '1px solid #ddd', flexGrow: 1 }} />
                <button className="primary-button" style={{ padding: '8px 15px' }}>Sign Up</button>
            </div>
            
            {/* 💥 REPLACE EMOJIS WITH ICONS 💥 */}
            <div style={{ marginTop: '20px' }}>
                <a href="tel:+911234567890"><FaPhoneAlt style={{ ...iconStyle, fontSize: '16px' }} /></a>
                <a href="https://www.instagram.com"><FaInstagram style={iconStyle} /></a>
                <a href="https://www.facebook.com"><FaFacebookF style={iconStyle} /></a>
                <a href="https://www.pinterest.com"><FaPinterestP style={iconStyle} /></a>
            </div>
            
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-light-text)' }}>
          © {new Date().getFullYear()} Harvest Moon Organics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;