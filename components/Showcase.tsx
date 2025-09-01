
import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';

// FIX: Removed React.FC for better type inference with framer-motion.
const Showcase = () => {
  // FIX: Explicitly type variants with the Variants type.
  const textVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // FIX: Explicitly type variants with the Variants type.
  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="showcase" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Universe of
              <br />
              <span className="text-brand-accent-pink">Possibilities</span>
            </h2>
            <p className="text-lg text-brand-text-secondary mb-8">
              Starlight combines all your essential tools into one cohesive, intelligent workspace. From project management and document collaboration to real-time communication, everything is just a click away.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-accent-indigo text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Explore Workflow
            </motion.button>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <div className="bg-brand-light-blue p-4 lg:p-8 rounded-3xl shadow-2xl shadow-brand-space-blue/50 border border-white/10">
              <img
                src="https://picsum.photos/seed/starlightapp/800/600"
                alt="Starlight App Showcase"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;