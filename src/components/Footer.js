// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
// Import Icons for Social Media and Contact
import { FaPhoneAlt, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
// Ensure this points to where your CSS is, or create a new Footer.css
import '../App.css'; 

const Footer = () => {
    // Note: All previous inline style objects (footerStyle, gridStyle, etc.) have been removed.

    return (
        <footer className="app-footer">
            <div className="content-wrapper-footer">
                {/* footer-grid is the element that needs responsive adjustment */}
                <div className="footer-grid">
                    
                    {/* Shop Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Shop</h4>
                        <Link to="/shop/groceries" className="footer-link">Groceries</Link>
                        <Link to="/shop/personal-care" className="footer-link">Personal Care</Link>
                        <Link to="/shop/supplements" className="footer-link">Supplements</Link>
                        <Link to="/shop/seasonal" className="footer-link">Seasonal</Link>
                    </div>

                    {/* Learn Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Learn</h4>
                        <Link to="/story" className="footer-link">Our Story</Link>
                        <Link to="/certifications" className="footer-link">Certifications</Link>
                        <Link to="/blog" className="footer-link">Blog</Link>
                        <Link to="/faq" className="footer-link">FAQ</Link>
                    </div>

                    {/* Support Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Support</h4>
                        <Link to="/contact" className="footer-link">Contact Us</Link>
                        <Link to="/shipping" className="footer-link">Shipping & Returns</Link>
                        <Link to="/terms" className="footer-link">Terms of Service</Link>
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                    </div>

                    {/* Newsletter Column */}
                    <div className="footer-column newsletter-column">
                        <h4 className="footer-heading">Newsletter</h4>
                        <p className="newsletter-text">Join our community for healthy updates!</p>
                        <div className="newsletter-input-group">
                            <input type="email" placeholder="Email" className="newsletter-input" />
                            <button className="primary-button newsletter-button">Sign Up</button>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className="social-icons">
                            <a href="tel:+911234567890"><FaPhoneAlt className="social-icon phone-icon" /></a>
                            <a href="https://www.instagram.com"><FaInstagram className="social-icon" /></a>
                            <a href="https://www.facebook.com"><FaFacebookF className="social-icon" /></a>
                            <a href="https://www.pinterest.com"><FaPinterestP className="social-icon" /></a>
                        </div>
                    </div>
                </div>

                <p className="copyright-text">
                    © {new Date().getFullYear()} Harvest Moon Organics. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;