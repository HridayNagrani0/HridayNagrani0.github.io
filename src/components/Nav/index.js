import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-cyan/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="relative">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-blue opacity-30 blur-sm rounded-lg"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative text-xl font-bold text-white px-3 py-1 rounded-lg">
              Hriday Nagrani
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {['About', 'Education', 'Experience', 'Publications', 'Projects', 'Skills', 'AR/VR Demo', 'Contact'].map((item, i) => (
              <motion.a 
                key={i}
                href={`#${item.toLowerCase().replace('/', '').replace(' ', '-')}`} 
                className="text-gray-300 hover:text-cyber-cyan px-3 py-2 rounded-md transition-colors duration-200 relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyber-cyan"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-10 bg-cyber-cyan"
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-cyber-medium text-white border border-cyber-cyan/30"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 245, 255, 0.5)' }}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-cyber-dark/90 backdrop-blur-lg border border-cyber-cyan/20 rounded-lg mt-2"
              initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 space-y-1 px-2">
                {['About', 'Education', 'Experience', 'Publications', 'Projects', 'Skills', 'Contact'].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-300 hover:text-cyber-cyan hover:bg-cyber-medium/30 rounded-md transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;