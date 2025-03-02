import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ARVRShowcase from './components/ARVRShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import { motion, AnimatePresence } from 'framer-motion';

// Wrapper component that adds transition effects
const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={isDarkMode ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-cyber-dark text-white' : 'bg-cyberLight-dark text-gray-800'
        }`}
      >
        <Nav />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Publications />
          <Projects />
          <Skills />
          <ARVRShowcase />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ThemedApp />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;