
import React from 'react';
import { motion } from 'framer-motion';

// FIX: Removed React.FC for better type inference with framer-motion.
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-12"
    >
      <div className="container mx-auto px-6 text-center text-brand-text-secondary">
        <p>&copy; {new Date().getFullYear()} Starlight Inc. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-brand-accent-indigo transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-accent-indigo transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-accent-indigo transition-colors">Privacy Policy</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
