
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Star = ({ x, y, size, delay, duration }: { x: number; y: number; size: number; delay: number; duration: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 1, 0.5, 0], scale: [0.5, 1.2, 0.8, 0.5] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        delay: delay,
        ease: 'linear',
      }}
    />
  );
};

// FIX: Removed React.FC for better type inference with framer-motion.
const StarryBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 5,
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none">
      {stars.map(star => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};

export default StarryBackground;
