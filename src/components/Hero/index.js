import React from 'react';
import { bio } from '../../data/content';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark relative overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyber-cyan opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div 
          className="text-white md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-3 py-1 border border-cyber-cyan text-cyber-cyan rounded-md text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            WELCOME TO THE FUTURE
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
            {bio.name}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-2 text-white">
            {bio.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {bio.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#about" 
              className="bg-cyber-blue hover:bg-opacity-80 text-white px-8 py-3 rounded-lg font-medium transition duration-300 border border-transparent hover:border-cyber-cyan relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-cyan to-cyber-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              <span className="relative z-10">Explore My Work</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect
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
              {/* Orbit circles */}
              <motion.div 
                className="absolute inset-0 -m-8 border border-cyber-cyan opacity-20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 -m-16 border border-cyber-purple opacity-10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile image with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyber-cyan rounded-full opacity-30 blur-xl"></div>
                <motion.img 
                  src={bio.profileImage} 
                  alt={bio.name} 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-cyber-cyan shadow-2xl relative z-10"
                  loading="eager" 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Tech icons floating around */}
                <motion.div 
                  className="absolute top-0 -right-5 w-12 h-12 bg-cyber-dark p-2 rounded-full border border-cyber-cyan shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <img src="/ai-icon.svg" alt="AI" className="w-full h-full" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-10 -left-8 w-12 h-12 bg-cyber-dark p-2 rounded-full border border-cyber-purple shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <img src="/vr-icon.svg" alt="VR" className="w-full h-full" />
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;