import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg overflow-hidden group"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle Dark Mode"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-medium dark:bg-cyberLight-medium rounded-lg border border-cyber-cyan/30 dark:border-cyberLight-cyan/30 transition-colors duration-300"></div>
      
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/30 to-cyber-blue/30 dark:from-cyberLight-cyan/30 dark:to-cyberLight-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark dark:bg-grid-pattern-light opacity-10 rounded-lg"></div>
      
      {/* Icon container - with rotation effect on toggle */}
      <motion.div 
        className="relative z-10 w-6 h-6 flex items-center justify-center"
        initial={false}
        animate={{ rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sun/Moon icons with crossfade effect */}
        <div className="relative">
          {/* Sun icon */}
          <motion.svg 
            className="w-5 h-5 text-cyber-cyan dark:text-cyberLight-cyan absolute inset-0" 
            initial={false}
            animate={{ opacity: isDarkMode ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </motion.svg>
          
          {/* Moon icon */}
          <motion.svg 
            className="w-5 h-5 text-cyber-cyan dark:text-cyberLight-cyan absolute inset-0" 
            initial={false}
            animate={{ opacity: isDarkMode ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </motion.svg>
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 