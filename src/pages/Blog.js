// src/pages/Blog.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../App.css';

const articles = [
    { id: 1, title: "The Power of Ancient Grains", snippet: "Discover why grains like Quinoa and Amaranth are nutritional powerhouses.", image: 'blog11.jfif' },
    { id: 2, title: "5 Minute Organic Lunch Ideas", snippet: "Quick, healthy, and easy meals for your busy weekdays.", image: 'blog31.jfif' },
    { id: 3, title: "Beginner's Guide to Home Composting", snippet: "Turn your kitchen scraps into rich soil for your garden.", image: 'blog21.jfif' },
];

const Blog = () => {
  return (
    <div className="page-container content-wrapper-blog">
      <h1 className="section-title" style={{ marginTop: '0' }}>Health & Recipes Blog</h1>
      <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--color-light-text)' }}>
        Nourish your mind and body with tips, recipes, and sustainability insights.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
            style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}
          >
            <Link to={`/blog/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={`/images/${article.image}`} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                    <h3 style={{ color: 'var(--color-primary)', margin: '0 0 10px 0' }}>{article.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-light-text)' }}>{article.snippet}</p>
                    <span style={{ fontSize: '12px', color: 'var(--color-text)', fontWeight: 'bold' }}>Read More →</span>
                </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;