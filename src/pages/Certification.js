// src/pages/Certifications.js
import React from 'react';
import { motion } from 'framer-motion';
// 💥 NEW: Import Icons from Font Awesome (Fa) 💥
import { FaLeaf, FaHandshake, FaGlobe, FaRecycle } from 'react-icons/fa';
import '../App.css';

const Certifications = () => {
  const certs = [
    { icon: FaLeaf, title: 'USDA Organic', desc: 'Verified by the U.S. Department of Agriculture for sustainable, chemical-free practices.' },
    { icon: FaHandshake, title: 'Fair Trade Certified', desc: 'Ensuring fair wages and safe working conditions for all our farming partners.' },
    { icon: FaGlobe, title: 'Non-GMO Project Verified', desc: 'Our products are free from genetically modified organisms, guaranteed.' },
    { icon: FaRecycle, title: 'Zero Waste Commitment', desc: 'All packaging is recyclable, compostable, or reusable.' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="page-container content-wrapper">
      <h1 className="section-title" style={{ marginTop: '0' }}>Our Quality & Certifications</h1>
      <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--color-light-text)' }}>
        Your health and the planet's health are our top priorities. Here is our commitment to transparency.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
        {certs.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.15 }} // Staggered entry animation
            style={{ textAlign: 'center', padding: '30px', border: '1px solid #ddd', borderRadius: '8px' }}
          >
            {/* 💥 RENDER THE ICON COMPONENT 💥 */}
            <cert.icon style={{ fontSize: '50px', color: 'var(--color-primary)', display: 'block', margin: '0 auto 15px' }} />
            <h3 style={{ color: 'var(--color-primary)' }}>{cert.title}</h3>
            <p style={{ fontSize: '14px', color: 'var(--color-light-text)' }}>{cert.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;