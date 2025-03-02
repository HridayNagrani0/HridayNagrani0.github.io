import React from 'react';
import { bio } from '../../data/content';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800" id="home">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="text-white md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {bio.name}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-2">
            {bio.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {bio.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#about" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {bio.profileImage && (
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <img 
                src={bio.profileImage} 
                alt={bio.name} 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
                loading="eager" 
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;