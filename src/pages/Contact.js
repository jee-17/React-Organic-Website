// src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; 

const Contact = () => {
    
    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    return (
        <div className="page-container content-wrapper-contact">
            <h1 className="section-title" style={{ marginTop: '0' }}>Get in Touch</h1>
            <p style={{ textAlign: 'center', color: 'var(--color-light-text)', marginBottom: '40px' }}>
                We'd love to hear from you. Whether it's a question about our products, an order, or a partnership inquiry, our team is ready to help.
            </p>

            <div style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
                
                {/* Contact Form Section (Animated) */}
                <motion.section 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ flex: 1, maxWidth: '500px' }}
                >
                    <form>
                        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
                        <input type="text" id="name" name="name" style={inputStyle} required />

                        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
                        <input type="email" id="email" name="email" style={inputStyle} required />

                        <label htmlFor="subject" style={{ fontWeight: 'bold' }}>Subject</label>
                        <input type="text" id="subject" name="subject" style={inputStyle} required />

                        <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
                        <textarea id="message" name="message" rows="5" style={{...inputStyle, resize: 'vertical'}} required></textarea>

                        <button type="submit" className="primary-button" style={{ width: '100%', marginTop: '20px' }}>Send Message</button>
                    </form>
                </motion.section>

                {/* Information Section (Animated) */}
                <motion.section 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: 1, maxWidth: '300px', backgroundColor: 'var(--color-secondary)', padding: '30px', borderRadius: '8px', alignSelf: 'flex-start' }}
                >
                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Contact Information</h3>
                    
                    <p>
                        <strong>Email Support</strong> <br/>
                        support@harvestmoon.com
                    </p>
                    
                    <p>
                        <strong>Phone</strong> <br/>
                        +91 123 456 7890 (Mon - Fri, 9am - 5pm IST)
                    </p>
                    
                    <p>
                        <strong>Warehouse Address</strong> <br/>
                        101 Organic Lane, <br/>
                        Green City, <br/>
                        New Delhi 110001
                    </p>
                </motion.section>
            </div>
        </div>
    );
};

export default Contact;