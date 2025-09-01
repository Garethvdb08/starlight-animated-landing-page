
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';

// FIX: Removed React.FC for better type inference with framer-motion.
const App = () => {
  return (
    <div className="relative isolate min-h-screen w-full bg-brand-deep-blue font-sans antialiased">
      <StarryBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
