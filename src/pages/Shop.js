// src/pages/Shop.js (COMPLETE CODE with URL Category Filtering)

import React, { useState, useEffect } from 'react'; // Added useEffect
import { useParams, Link } from 'react-router-dom'; // Added useParams
import { motion } from 'framer-motion';
import '../App.css';

// DUMMY PRODUCT DATA
const ALL_PRODUCTS = [
  // NOTE: Category names MUST match the link text (e.g., 'Groceries', not 'groceries')
  { id: 1, name: 'Ancient Gracola', price: '15.50', image: 'product1.jfif', category: 'Groceries', dietary: ['Gluten-Free', 'Vegan'] },
  { id: 2, name: 'Lavender Body Oil', price: '18.50', image: 'product2.jfif', category: 'personal care', dietary: ['Vegan'] },
  { id: 3, name: 'Heilium Tomato', price: '14.79', image: 'product3.jfif', category: 'Groceries', dietary: ['Vegan'] },
  { id: 4, name: 'Raw Acacia Honey', price: '21.00', image: 'product4.jfif', category: 'Groceries', dietary: [] },
  { id: 5, name: 'Chia Seeds', price: '8.99', image: 'product1.jfif', category: 'Groceries', dietary: ['Gluten-Free', 'Vegan'] },
  { id: 6, name: 'Herbal Shampoo', price: '12.99', image: 'product2.jfif', category: 'personal care', dietary: [] },
  { id: 7, name: 'Vitamin B12', price: '25.00', image: 'product3.jfif', category: 'Supplements', dietary: ['Vegan'] },
  { id: 8, name: 'Almond Flour', price: '11.50', image: 'product4.jfif', category: 'Groceries', dietary: ['Gluten-Free'] },
  { id: 9, name: 'Lip Balm', price: '5.00', image: 'product1.jfif', category: 'personal care', dietary: [] },
];

const Shop = () => {
  // 1. READ URL PARAMETER
  const { category: urlCategory } = useParams(); 

  // 2. STATE MANAGEMENT
  const [filters, setFilters] = useState({
    category: [],
    dietary: [],
  });
  
// src/pages/Shop.js (UPDATED useEffect)

useEffect(() => {
    if (urlCategory) {
        // Step 1: Normalize the URL slug to match the ALL_PRODUCTS data format.
        // It converts: 'personal-care' -> 'personal care'
        const normalizedCategory = urlCategory.toLowerCase().replace(/-/g, ' '); 
        
        // Use an array for setFilters since your filter logic expects an array
        setFilters(prevFilters => ({
            ...prevFilters,
            category: [normalizedCategory] 
        }));
    } else {
        setFilters(prevFilters => ({
            ...prevFilters,
            category: [] 
        }));
    }
}, [urlCategory]);
  // 4. FILTERING LOGIC
  const displayedProducts = ALL_PRODUCTS.filter(product => {
    const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
    const dietaryMatch = filters.dietary.length === 0 || 
                         filters.dietary.every(filter => product.dietary.includes(filter));

    return categoryMatch && dietaryMatch;
  });

  // 5. HANDLER FUNCTION for Checkboxes
  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters(prevFilters => {
      const currentList = prevFilters[filterType];
      
      if (isChecked) {
        return { ...prevFilters, [filterType]: [...currentList, value] };
      } else {
        return { ...prevFilters, [filterType]: currentList.filter(item => item !== value) };
      }
    });
  };

  // Helper for Checkbox component
  const Checkbox = ({ filterType, value, label }) => (
    <label style={{ display: 'block', marginBottom: '5px', cursor: 'pointer' }}>
      <input 
        type="checkbox" 
        value={value} 
        checked={filters[filterType].includes(value)}
        onChange={(e) => handleFilterChange(filterType, value, e.target.checked)}
        style={{ marginRight: '8px' }}
      />
      {label}
    </label>
  );

  // Animation variants (reused from previous code)
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
    
  return (
    <div className="page-container content-wrapper">
      <h1 className="section-title" style={{ marginTop: '0' }}>Our Full Organic Collection</h1>
      
      {/* <div style={{ display: 'flex', gap: '30px' }}> */}
        <div className="shop-layout-container">
        {/* Filter Sidebar */}
        <motion.aside 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            // style={{ width: '250px', padding: '20px', border: '1px solid #eee', alignSelf: 'flex-start' }}
            className="shop-sidebar"
        >
            <h3 style={{ color: 'var(--color-primary)' }}>Filters</h3>
            
            <div style={{ marginBottom: '25px' }}>
                <h4>Category</h4>
                <Checkbox filterType="category" value="Groceries" label="Groceries" />
                <Checkbox filterType="category" value="personal care" label="Personal Care" />
                <Checkbox filterType="category" value="Supplements" label="Supplements" />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
                <h4>Dietary Needs</h4>
                <Checkbox filterType="dietary" value="Gluten-Free" label="Gluten-Free" />
                <Checkbox filterType="dietary" value="Vegan" label="Vegan" />
            </div>
        </motion.aside>

        {/* Product Grid */}
        <section className="shop-product-area">
        
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <p>Showing <strong>{displayedProducts.length}</strong> of {ALL_PRODUCTS.length} results</p>
                <select style={{ padding: '8px' }}>
                    <option>Sort by Best Selling</option>
                    <option>Sort by Price: Low to High</option>
                    <option>Sort by Newest</option>
                </select>
            </div>
            
            <motion.div 
                variants={cardContainerVariants} 
                initial="hidden" 
                animate="show"
                // style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
                className="shop-product-grid"
            >
                {/* MAP OVER FILTERED PRODUCTS */}
                {displayedProducts.map(product => (
                    <motion.div key={product.id} variants={cardItemVariants} className="product-card" whileHover={{ scale: 1.05 }}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <img src={`/images/${product.image}`} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                            <h4 style={{ margin: '10px 0', fontWeight: 'normal', color: 'var(--color-text)' }}>{product.name}</h4>
                            <p style={{ margin: '5px 0', color: 'var(--color-primary)' }}>${product.price}</p>
                        </Link>
                        <button className="primary-button" style={{ padding: '8px 15px' }}>Add to Cart</button>
                        
                    </motion.div>
                ))}
                
                {displayedProducts.length === 0 && (
                    <p style={{ gridColumn: 'span 3', textAlign: 'center', padding: '50px' }}>No products match your current filters. Try adjusting your selections!</p>
                )}
            </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Shop;