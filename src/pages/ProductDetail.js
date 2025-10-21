// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Key hook for dynamic routes
import { motion } from 'framer-motion';
import '../App.css';

// Placeholder data based on the ID
const getProductDetails = (id) => {
    switch(id) {
        case '1': return { name: 'Ancient Gracola', price: '15.50', image: 'product1.jfif', desc: 'A potent blend of heirloom ancient grains, perfect for a high-protein breakfast or dinner side. Sustainably sourced.', rating: 5 };
        case '2': return { name: 'Lavender Body Oil', price: '18.50', image: 'product2.jfif', desc: 'Calming, organic lavender infused with jojoba oil. Perfect for sensitive skin and a restful night.', rating: 4 };
        // ... more cases for other IDs
        default: return { name: `Product ${id}`, price: 'XX.XX', image: 'product-default.jfif', desc: 'Organic, fresh, and ethically produced goodness.', rating: 4 };
    }
};

const ProductDetail = () => {
    const { productId } = useParams(); // Gets the ':productId' from the URL
    const product = getProductDetails(productId);
    
    return (
        <div className="page-container content-wrapper">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}
                style={{ display: 'flex', gap: '80px' }}
            >
                {/* Image Section */}
                <div style={{ flex: 1 }}>
                    <img 
                        src={`/images/${product.image}`} 
                        alt={product.name} 
                        style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>

                {/* Details Section */}
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', margin: '0 0 10px 0' }}>{product.name}</h1>
                    <p style={{ color: 'gold', fontSize: '20px' }}>{'★'.repeat(product.rating)} ({product.rating}.0)</p>
                    <p style={{ fontSize: '30px', color: 'var(--color-primary)', fontWeight: 'bold', margin: '15px 0 30px 0' }}>${product.price}</p>
                    
                    <p style={{ lineHeight: 1.6, marginBottom: '40px' }}>{product.desc}</p>

                    {/* Quantity Selector (Placeholder) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                        <input type="number" defaultValue="1" min="1" style={{ padding: '10px', width: '60px', border: '1px solid #ddd' }} />
                        <button className="primary-button" style={{ padding: '15px 40px' }}>Add to Cart</button>
                    </div>
                    
                    <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Product Info</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-light-text)' }}>Origin: India | Weight: 500g | Certified: Yes</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductDetail;