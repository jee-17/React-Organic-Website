// src/App.js (FINAL COMPLETE CODE)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home'; 
import Shop from './pages/Shop';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact'; // The new page
import Certifications from './pages/Certification'; // <-- NEW
import Blog from './pages/Blog'; // <-- NEW
import ProductDetail from './pages/ProductDetail'; // <-- NEW

import './App.css'; 

// Placeholder Components (Defined here for simplicity, typically separate files)
/*const Certifications = () => <div className="page-container content-wrapper"><h1 className="section-title">Certifications & Quality</h1><p>Details on USDA, FSSAI, and other seals of approval go here to build trust.</p></div>;
const Blog = () => <div className="page-container content-wrapper"><h1 className="section-title">Health & Recipes Blog</h1><p>Engaging articles to drive traffic and authority.</p></div>;
const ProductDetail = () => <div className="page-container content-wrapper"><h1 className="section-title">Product Name Detail</h1><p>This page dynamically shows the info for the product ID in the URL.</p></div>;*/


// --- FRAMER MOTION PAGE TRANSITION LOGIC ---
const PageTransitionWrapper = () => {
   
   const location = useLocation();

    // Define the animation properties
    const pageVariants = {
      initial: { opacity: 0, x: -50 }, 
      in: { opacity: 1, x: 0 }, 
      out: { opacity: 0, x: 50 }, 
    };

    const pageTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5 
    };

    return (
        <AnimatePresence mode='wait'> 
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Home /></motion.div>} />
                {/* 💥 FIX 1: UPDATE THE SHOP ROUTE 💥 */}
                {/* The ":category?" part makes the category name dynamic AND optional. */}
                <Route 
                    path="/shop/:category?" // <-- THIS LINE IS THE FIX
                    element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Shop /></motion.div>} 
                />
                <Route path="/shop" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Shop /></motion.div>} />
                <Route path="/story" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><OurStory /></motion.div>} />
                <Route path="/certifications" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Certifications /></motion.div>} />
                <Route path="/blog" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Blog /></motion.div>} />
                <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Contact /></motion.div>} />
                <Route path="/product/:productId" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><ProductDetail /></motion.div>} />
                <Route path="*" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><div className="page-container content-wrapper"><h1 className="section-title">404 - Page Not Found</h1></div></motion.div>} />
            </Routes>
        </AnimatePresence>
    );
};
// --- END PAGE TRANSITION LOGIC ---


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <main>
            {/* The wrapper component handles all page content */}
            <PageTransitionWrapper />
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;