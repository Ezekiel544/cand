import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CandoxaImg from './assets/candoxa.jpg'; // Path to your logo image

const Preloader = () => {
  const navigate = useNavigate();
  const text = "CANDOXA"; // The text we want to animate

  // Use effect to navigate after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landingpage'); // Adjust the route to where you want to go
    }, 3000); // Adjust the timeout to suit your needs (in milliseconds)

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Logo Animation: Butterfly effect */}
      <motion.div
        className="text-6xl mb-1"
        animate={{
          y: [0, -20, 0], // Move up and down for flutter effect
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        <img
          src={CandoxaImg}
          alt="Candoxa Logo"
          className="w-13 h-13 z-50 rounded-full"
        />
      </motion.div>

      {/* Loading Text with Animated Dots */}
    <motion.div
      className="text-sm font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Loading Text as Typing Animation */}
      <motion.div className="text-lg font-semibold text-white">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.3 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Preloader;
