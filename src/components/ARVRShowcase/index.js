import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Demo models information
const MODELS = [
  {
    name: 'Quest VR Media Player',
    description: 'Interactive VR media player developed for educational purposes'
  },
  {
    name: 'AR Visualization Tool',
    description: 'AR data visualization tool for analyzing complex datasets in 3D space'
  },
  {
    name: 'Neural Network Visualizer',
    description: 'Real-time visualization of neural network architecture and data flow'
  }
];

// Main AR/VR showcase component
const ARVRShowcase = () => {
  const [activeModel, setActiveModel] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [xrMode, setXrMode] = useState('3D');
  const { isDarkMode } = useTheme();
  
  // Handle model change
  const changeModel = (index) => {
    setActiveModel(index);
    setShowInfo(false);
  };
  
  // Handle mode change
  const handleModeChange = (mode) => {
    setXrMode(mode);
    
    if (mode === 'VR' || mode === 'AR') {
      alert(`${mode} mode would launch here. This feature is in development.`);
      setXrMode('3D');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 relative" id="ar-vr-demo">
      {/* Background decoration elements */}
      <div className={`absolute -right-20 top-1/4 w-80 h-80 ${isDarkMode ? 'bg-cyber-cyan' : 'bg-cyberLight-cyan'} opacity-5 rounded-full blur-3xl`}></div>
      <div className={`absolute -left-20 bottom-1/3 w-80 h-80 ${isDarkMode ? 'bg-cyber-neon' : 'bg-cyberLight-neon'} opacity-5 rounded-full blur-3xl`}></div>
      
      <motion.h2 
        className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-${isDarkMode ? 'cyber-purple' : 'cyberLight-purple'} to-${isDarkMode ? 'cyber-neon' : 'cyberLight-neon'} bg-clip-text text-transparent`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Interactive AR/VR Experience
      </motion.h2>
      
      <motion.p 
        className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Explore my AR/VR projects in an interactive 3D environment
      </motion.p>
      
      {/* Mode selection buttons */}
      <motion.div 
        className="flex justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          className={`px-6 py-2 rounded-full text-sm ${
            xrMode === '3D' 
              ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan' 
              : 'bg-cyber-dark border border-cyber-cyan/30 text-gray-300 hover:border-cyber-cyan/50'
          } transition-all duration-300`}
          onClick={() => handleModeChange('3D')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          3D Mode
        </motion.button>
        
        <motion.button
          className={`px-6 py-2 rounded-full text-sm ${
            xrMode === 'VR' 
              ? 'bg-cyber-neon/20 border border-cyber-neon text-cyber-neon' 
              : 'bg-cyber-dark border border-cyber-neon/30 text-gray-300 hover:border-cyber-neon/50'
          } transition-all duration-300`}
          onClick={() => handleModeChange('VR')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VR Mode
        </motion.button>
        
        <motion.button
          className={`px-6 py-2 rounded-full text-sm ${
            xrMode === 'AR' 
              ? 'bg-cyber-purple/20 border border-cyber-purple text-cyber-purple' 
              : 'bg-cyber-dark border border-cyber-purple/30 text-gray-300 hover:border-cyber-purple/50'
          } transition-all duration-300`}
          onClick={() => handleModeChange('AR')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AR Mode
        </motion.button>
      </motion.div>
      
      {/* Placeholder for 3D viewer */}
      <motion.div 
        className={`relative w-full h-[600px] ${isDarkMode ? 'bg-cyber-dark' : 'bg-cyberLight-dark'} rounded-lg overflow-hidden border ${isDarkMode ? 'border-cyber-cyan/30' : 'border-cyberLight-cyan/30'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {/* Tech pattern background */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'} opacity-10 pointer-events-none`}></div>
        
        {/* Glowing corner accents */}
        <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 ${isDarkMode ? 'border-cyber-cyan' : 'border-cyberLight-cyan'} opacity-60 pointer-events-none`}></div>
        <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 ${isDarkMode ? 'border-cyber-cyan' : 'border-cyberLight-cyan'} opacity-60 pointer-events-none`}></div>
        
        {/* Content placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`max-w-md p-6 ${isDarkMode ? 'bg-cyber-dark/80' : 'bg-cyberLight-dark/80'} backdrop-blur-sm rounded-lg border ${isDarkMode ? 'border-cyber-cyan/20' : 'border-cyberLight-cyan/20'}`}>
            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-cyber-cyan' : 'text-cyberLight-cyan'}`}>
              {MODELS[activeModel].name}
            </h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {MODELS[activeModel].description}
            </p>
            <div className="mt-4 text-sm text-cyber-purple">
              <p>• Real-time 3D visualization technology</p>
              <p>• Cross-platform VR/AR compatibility</p>
              <p>• Advanced interaction patterns</p>
            </div>
          </div>
        </div>
        
        {/* Info toggle button */}
        <motion.button
          className="absolute bottom-4 right-4 bg-cyber-dark border border-cyber-cyan/30 text-cyber-cyan px-4 py-2 rounded-md text-sm hover:bg-cyber-cyan/10 transition-colors duration-300"
          onClick={() => setShowInfo(!showInfo)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showInfo ? 'Hide Info' : 'Show Info'}
        </motion.button>
      </motion.div>
      
      {/* Model selection */}
      <motion.div 
        className="flex justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {MODELS.map((model, index) => (
          <motion.button
            key={index}
            className={`px-6 py-2 rounded-full text-sm ${
              activeModel === index 
                ? 'bg-cyber-purple/20 border border-cyber-purple text-cyber-purple' 
                : 'bg-cyber-dark border border-cyber-blue/30 text-gray-300 hover:border-cyber-blue/50'
            } transition-all duration-300`}
            onClick={() => changeModel(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {model.name}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Feature hints */}
      <motion.div 
        className="mt-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r from-${isDarkMode ? 'cyber-neon' : 'cyberLight-neon'} to-${isDarkMode ? 'cyber-cyan' : 'cyberLight-cyan'} bg-clip-text text-transparent`}>
          Technical Features
        </h3>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Real-time 3D rendering with Three.js",
            "WebXR integration for immersive VR/AR",
            "Dynamic lighting and environment mapping",
            "Interactive 3D UI elements",
            "Optimized 3D assets for web performance",
            "Cross-device compatibility"
          ].map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.7 }}
            >
              <div className="flex-shrink-0 w-6 h-6 mt-0.5 mr-2 bg-cyber-dark rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyber-cyan rounded-full"></div>
              </div>
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ARVRShowcase; 