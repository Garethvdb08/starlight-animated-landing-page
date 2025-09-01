
import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import { FEATURES } from '../constants';
import type { Feature } from '../types';

// FIX: Explicitly type variants with the Variants type.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjusted stagger delay
    },
  },
};

// FIX: Explicitly type variants with the Variants type.
const itemVariants: Variants = {
  hidden: { y: 75, opacity: 0 }, // Increased slide-up distance
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// FIX: Removed React.FC and explicitly typed props for better type inference.
const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-brand-light-blue p-8 rounded-2xl border border-white/10 flex flex-col items-start gap-4"
    >
      <div className="p-3 bg-brand-space-blue rounded-xl">{feature.icon}</div>
      <h3 className="text-xl font-bold text-brand-text-primary">{feature.title}</h3>
      <p className="text-brand-text-secondary">{feature.description}</p>
    </motion.div>
  );
};

// FIX: Removed React.FC for better type inference with framer-motion.
const Features = () => {
  return (
    <section id="features" className="py-24 bg-brand-space-blue">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Starlight?</h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-text-secondary">
            We've engineered a new standard for productivity tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;