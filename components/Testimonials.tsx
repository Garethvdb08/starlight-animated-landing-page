
import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

// FIX: Explicitly type variants with the Variants type.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// FIX: Explicitly type variants with the Variants type.
const itemVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// FIX: Removed React.FC and explicitly typed props for better type inference.
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-brand-light-blue p-8 rounded-2xl border border-white/10 flex flex-col"
    >
      <p className="text-brand-text-secondary italic flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center mt-6">
        <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-bold text-brand-text-primary">{testimonial.author}</p>
          <p className="text-sm text-brand-text-secondary">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

// FIX: Removed React.FC for better type inference with framer-motion.
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-space-blue">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Teams Worldwide</h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-text-secondary">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;