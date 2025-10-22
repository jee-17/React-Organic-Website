// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { motion } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css'; 


const testimonials = [
  {
    id: 1,
    quote: "Since switching to Harvest Moon Organics, I feel healthier and more energized. The quality is unmatched!",
    author: "Priyas S."
  },
  {
    id: 2,
    quote: "The fair trade sourcing and zero-waste packaging show a genuine commitment. Best organic honey I've ever tasted.",
    author: "Rohan V."
  },
  {
    id: 3,
    quote: "I love the quick delivery and freshness of the produce. Harvest Moon has made eating clean so much easier!",
    author: "Meera K."
  },
];

const featuredProducts = [
  { id: 1, name: 'Ancient Gracola', price: '15.50', image: 'product1.jfif' },
  { id: 2, name: 'Lavender Body Oil', price: '18.50', image: 'product2.jfif' },
  { id: 3, name: 'Heilium Tomato', price: '14.79', image: 'product3.jfif' },
  { id: 4, name: 'Raw Acacia Honey', price: '21.00', image: 'product4.jfif' },
];

// Reusable Product Card Component
const ProductCard = ({ product }) => (
    <motion.div 
      className="product-card"
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.98 }} 
      style={{ border: '1px solid #eee', padding: '15px', textAlign: 'center', backgroundColor: 'white' }}
    >
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            <img src={`/images/${product.image}`} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <h4 style={{ margin: '10px 0', fontWeight: 'normal', color: 'var(--color-text)' }}>{product.name}</h4>
            <p style={{ margin: '5px 0', color: 'var(--color-primary)' }}>${product.price}</p>
        </Link>
        <button className="primary-button" style={{ padding: '8px 15px' }}>Add to Cart</button>
    </motion.div>
);

const Home = () => {
  // 💥 FIX: MOVE windowWidth state and effect HERE 💥
    // 1. State to track the screen width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // 2. Effect to update width on screen resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // 💥 NEW: State to track the active testimonial index 💥
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // 💥 NEW: useEffect hook to manage the auto-rotation timer 💥
  useEffect(() => {
    const timer = setInterval(() => {
      // Cycle to the next testimonial, wrapping around to the start
      setCurrentTestimonial(prevIndex => 
        (prevIndex + 1) % testimonials.length
      );
    }, 6000); // Change testimonial every 6 seconds (6000 milliseconds)

    // Cleanup function: important to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs only once on mount
    
 
  
    
  // Animation properties for content that appears on scroll
  const scrollAnimateProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 } 
  };
    
  const heroStyle = {
        backgroundImage: 'url("/images/placeholder-hero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'var(--hero-height, 450px)',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        fontFamily: 'var(--font-serif)',
        // ✅ NOW windowWidth IS DEFINED HERE AND WILL WORK ✅
        paddingLeft: windowWidth < 768 ? '15px' : 'var(--hero-padding, 5%)',
        paddingRight: windowWidth < 768 ? '15px' : '5%',
       
  };

  const productGridStyle = {
    display: 'grid',
    //gridTemplateColumns: '1.2fr repeat(4, 1fr)', 
    gap: '20px',
    margin: '40px 0',
    gridTemplateColumns: windowWidth > 768 
        ? '1.2fr repeat(4, 1fr)' // Desktop/Tablet wide columns
        : ' 1fr',
  };
 // Get the current testimonial object
  const testimonial = testimonials[currentTestimonial];
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <div style={heroStyle}>
        <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            style={{ zIndex: 1 }}
        >
          <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', fontWeight: '300' }}>Nourish Your Body, Naturally</h1>
          <p style={{ fontSize: '20px', margin: '0 0 30px 0' }}>Organic Goodness Delivered to Your Door</p>
          <Link to="/shop"><button className="primary-button">SHOP NOW</button></Link>
        </motion.div>
      </div>

      <div className="content-wrapper-home">
        
      {/* 2. CATEGORIES & CERTIFICATIONS (Scroll Animation) */}
<motion.div 
    {...scrollAnimateProps}
    style={{ 
        display: 'flex', 
        // 🔥 FIX 1: Allow items to wrap to the next line
        flexWrap: 'wrap', 
        boxSizing: 'border-box',
        // 🔥 FIX 2: Center the items horizontally, rather than spacing them out
        justifyContent: 'center', 
        width: '100%',
        alignItems: 'center', 
        padding: '50px 20px', // Added horizontal padding for small screens
        borderBottom: '1px solid #eee',
        gap: '30px', // Use gap to control spacing instead of space-around
    }}
>
    {/* Categories (now acts as a flex item, centered on mobile) */}
    <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: 'center' }}> 
        <Link to="/shop/groceries"><img src="/images/category1.jfif" alt="Organic Groceries" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} /></Link>
        <p style={{ marginTop: '10px' }}>Organic Groceries</p>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} style={{ textAlign: 'center' }}>
        <Link to="/shop/personal-care"><img src="/images/category2.jfif" alt="Natural Personal Care" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} /></Link>
        <p style={{ marginTop: '10px' }}>Natural Personal Care</p>
    </motion.div>

    {/* Certifications (This content will drop to a new line if there isn't enough space) */}
    <div style={{ 
        textAlign: 'center',
        // Optional: Ensure this certification box doesn't take up too much width on desktop
        maxWidth: '250px', 
    }}>
        <h3 style={{ color: 'var(--color-light-text)', fontWeight: 'normal' }}>Why Choose Transparency?</h3>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '15px' }}>
            <img src="/images/cert1.jfif" alt="Certified Logo" style={{ width: '60px' }} />
            <img src="/images/cert2.jfif" alt="Fair Trade Logo" style={{ width: '60px' }} />
        </div>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>Certified Quality</p>
    </div>

</motion.div>
        {/* 3. PRODUCT SHOWCASE (Scroll Animation) */}
        <motion.section {...scrollAnimateProps} style={{ paddingBottom: '30px' }}>
            <h2 className="section-title">Product Showcase</h2>
            <div style={productGridStyle}>
                
                {/* Unique "Our Story" block (Animated) */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                        backgroundImage: 'url("/images/story-block.jfif")', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        padding: '30px', 
                        color: 'white', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-end' 
                    }}
                >
                    <h3 style={{ fontFamily: 'var(--font-serif)', margin: 0 }}>Our Core: Sustainable, Ethical, Local</h3>
                    <Link to="/story"><button className="primary-button" style={{ marginTop: '15px', alignSelf: 'flex-start' }}>VIEW OUR STORY</button></Link>
                </motion.div>
                
                {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
                
            </div>
        </motion.section>
        
       {/* 4. BEST SELLERS / TESTIMONIALS (Scroll Animation) */}
        <motion.section 
            {...scrollAnimateProps} 
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ paddingBottom: '80px', borderTop: '1px solid #eee' }}
        >
            <h2 className="section-title">Trusted By Our Community</h2>
           {/* /* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 0', marginBottom: '80px', borderTop: '1px solid #eee' }}>*/ }
            <div style={{ 
                 display: 'flex', 
    justifyContent: 'center', /* **🔥 FIX 1: Center the items horizontally** */
    alignItems: 'center',       /* **🔥 FIX 2: Center the items vertically** */
    flexDirection: windowWidth < 768 ? 'column' : 'row', 
    gap: windowWidth < 768 ? '30px' : '20px', 
    padding: '30px 0', 
    marginBottom: '20px', 
    borderTop: '1px solid #eee'
            }}>
            {/* 💥 TESTIMONIAL SLIDER IMPLEMENTATION 💥 */}
            <div className="testimonial-quote-box"style={{  lineHeight: '1.4', padding: '80px',//position: 'relative',// 🛑 FIX 1: Make width responsive
   // width: windowWidth < 768 ? '100%' : '50%', 
   width: windowWidth < 768 ? '100%' : '50%',
   maxWidth: '400px', /* Give it a reasonable maximum width */ 
   textAlign: windowWidth < 768 ? 'center' : 'left',
    // 🛑 FIX 2: Set a MIN-HEIGHT to reserve space for the text on mobile
    minHeight: windowWidth < 768 ? '200px' : 'auto',}}> 
                <AnimatePresence mode="wait">
                    <motion.div
                        key={testimonial.id} // Key is essential for AnimatePresence to track changes 
                        initial={{ opacity: 0, x: 20 }} // Start slightly to the right
                        animate={{ opacity: 1, x: 0 }} // Slide to the center
                        exit={{ opacity: 0, x: -20 }} // Slide out to the left
                        transition={{ duration: 0.5 }}
                        //style={{ position: 'absolute', width: '100%' }}
                    >
                        <p style={{ fontSize: '20px', fontStyle: 'italic', margin: 0 }}>
                            "{testimonial.quote}"
                        </p>
                        <p style={{ fontWeight: 'bold', marginTop: '15px', marginBottom: 0 }}>
                            - {testimonial.author}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Blog Links (Keep as is) */}
            <div className="blog-links-grid"style={{ display: 'flex', gap: '20px' ,
            justifyContent: 'center',
              // 🔥 FIX 5: Stack blog images on smaller screens
                flexDirection: windowWidth < 500 ? 'column' : 'row',
                alignItems: windowWidth < 500 ? 'center' : 'flex-start',
            }}  >
                <Link to="/blog/recipe" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>
                    <img src="/images/blog1.jfif" alt="Recipe"style={{ 
                width: '200px', 
                height: '250px', // INCREASED HEIGHT for a better aspect ratio (e.g., 200x250 portrait)
                objectFit: 'cover',
                marginBottom: '10px', // Add space between image and caption
                borderRadius: '5px',
                display: 'block', // Optional: adds a nice touch
            }} />
                    <p>5 Minute Organic Lunch Ideas</p>
                </Link>
                <Link to="/blog/gardening" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>
                    <img src="/images/blog2.jfif" alt="Gardening" style={{ 
                width: '200px', 
                height: '250px', // Must match the first image's height
                objectFit: 'cover',
                marginBottom: '10px', // Must match the first image's spacing
                borderRadius: '5px',
                display: 'block', // Optional: adds a nice touch
            }} />
                    <p>Gardening Tips for Beginners</p>
                </Link>
            </div>
        </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;