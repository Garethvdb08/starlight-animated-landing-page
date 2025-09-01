
import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type variants with the Variants type.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// FIX: Explicitly type variants with the Variants type.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// FIX: Removed React.FC for better type inference with framer-motion.
const Hero = () => {
  const title = "Illuminate Your Workflow.";

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-deep-blue via-brand-space-blue to-[#020210] animate-gradient-bg bg-[length:200%_200%]"></div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent-indigo rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-accent-pink rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 z-10"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-6"
          aria-label={title}
        >
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg md:text-xl text-brand-text-secondary mb-10"
        >
          Starlight is the next-generation productivity suite designed to bring clarity, speed, and collaboration to your team's universe.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 0px 20px rgba(244, 114, 182, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            className="bg-brand-accent-pink text-white font-bold py-4 px-10 text-lg rounded-full transition-all duration-300"
          >
            Discover the Future
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;