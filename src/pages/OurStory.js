// src/pages/OurStory.js (UPDATED with React Icons)

import React from 'react';
import { motion } from 'framer-motion';
// 💥 NEW: Import Icons from Material Design (Md) and Font Awesome (Fa) 💥
import { MdOutlineGrass, MdOutlineScience } from 'react-icons/md'; 
import { FaHandshakeSimple } from 'react-icons/fa6'; 
import '../App.css';

const OurStory = () => {
    
    const storySectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };
    
    // Data updated to use icon components
    const coreValues = [
        { icon: MdOutlineGrass, title: 'Sustainability', desc: 'Zero-waste packaging and carbon-neutral shipping.' },
        { icon: FaHandshakeSimple, title: 'Fair Trade', desc: 'Ensuring fair wages for all our farming partners.' },
        { icon: MdOutlineScience, title: 'Transparency', desc: 'Full ingredient traceability and verified certifications.' },
    ];


  return (
    <div className="page-container content-wrapper">
      <h1 className="section-title" style={{ marginTop: '0' }}>Our Commitment to the Earth</h1>
      
      <motion.div 
        variants={storySectionVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', gap: '50px', alignItems: 'center', marginBottom: '50px' }}
      >
        <div style={{ flex: 1 }}>
            <h2 style={{ color: 'var(--color-primary)' }}>From Our Fields to Your Table</h2>
            <p>Harvest Moon Organics was founded on the simple belief that nature knows best. We partner directly with a network of small, ethical farmers who share our commitment to sustainable, chemical-free agriculture.</p>
            <p>Every product is handled with care, ensuring that the natural goodness and nutrients are preserved from the soil to your home. We prioritize fair trade and local sourcing to support the communities that feed us.</p>
        </div>
        <img src="/images/farm-story.jfif" alt="Organic Farm" style={{ width: '40%', height: '300px', objectFit: 'cover' }} />
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ textAlign: 'center', color: 'var(--color-text)', marginTop: '40px' }}
      >
          Our Core Values
      </motion.h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', marginTop: '30px' }}>
        {/* 💥 RENDER LOOP FOR CORE VALUES 💥 */}
        {coreValues.map((value, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: index * 0.1 }}
            >
                {/* RENDER THE ICON */}
                <value.icon style={{ fontSize: '40px', color: 'var(--color-primary)', display: 'block', margin: '0 auto 10px' }} />
                <h3>{value.title}</h3>
                <p style={{ maxWidth: '200px' }}>{value.desc}</p>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;