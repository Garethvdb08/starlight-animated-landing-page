
import React from 'react';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference with framer-motion.
const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-deep-blue/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-brand-accent-indigo">Star</span>
          <span className="text-brand-accent-pink">light</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-brand-accent-indigo transition-colors">Features</a>
          <a href="#showcase" className="hover:text-brand-accent-indigo transition-colors">Showcase</a>
          <a href="#testimonials" className="hover:text-brand-accent-indigo transition-colors">Testimonials</a>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px rgba(99, 102, 241, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-accent-indigo text-white font-semibold py-2 px-5 rounded-full transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
