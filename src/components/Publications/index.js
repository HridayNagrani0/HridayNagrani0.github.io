import React from 'react';
import { publications } from '../../data/content';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Publications = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-16 relative" id="publications">
      {/* Background decorative elements - with dark/light mode colors */}
      <div className={`absolute -right-20 top-40 w-72 h-72 ${isDarkMode ? 'bg-cyber-purple' : 'bg-cyberLight-purple'} opacity-5 rounded-full blur-3xl`}></div>
      <div className={`absolute -left-10 bottom-1/3 w-48 h-48 ${isDarkMode ? 'bg-cyber-blue' : 'bg-cyberLight-blue'} opacity-5 rounded-full blur-3xl`}></div>
      
      <motion.h2 
        className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-${isDarkMode ? 'cyber-blue' : 'cyberLight-blue'} to-${isDarkMode ? 'cyber-purple' : 'cyberLight-purple'} bg-clip-text text-transparent`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Research Publications
      </motion.h2>
      
      <motion.p 
        className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-12`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Advancing the frontiers of knowledge in AI and Extended Reality
      </motion.p>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {publications.map((publication, index) => (
          <motion.div 
            key={index}
            className={`${isDarkMode ? 'bg-cyber-medium border-cyber-purple/30' : 'bg-cyberLight-medium border-cyberLight-purple/30'} border rounded-lg p-6 relative overflow-hidden group transition-colors duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ 
              y: -5, 
              boxShadow: isDarkMode 
                ? '0 10px 25px -5px rgba(110, 60, 188, 0.15)' 
                : '0 10px 25px -5px rgba(138, 79, 230, 0.15)'
            }}
          >
            {/* Tech pattern background */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'} opacity-10`}></div>
            
            {/* Glowing accent */}
            <div className={`absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 ${isDarkMode ? 'border-cyber-purple' : 'border-cyberLight-purple'} opacity-60`}></div>
            
            {/* Digital corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className={`absolute top-0 right-0 border-t-[16px] border-r-[16px] ${isDarkMode ? 'border-cyber-blue/40' : 'border-cyberLight-blue/40'}`}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2 group-hover:${isDarkMode ? 'text-cyber-purple' : 'text-cyberLight-purple'} transition-colors duration-300`}>
                {publication.title}
              </h3>
              
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {publication.description}
              </p>
              
              <div className="flex flex-wrap items-center justify-between">
                <span className={`text-sm ${isDarkMode ? 'text-cyber-cyan' : 'text-cyberLight-cyan'} italic`}>
                  {publication.publication}
                </span>
                
                {publication.link && (
                  <motion.a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${isDarkMode ? 'text-cyber-purple hover:text-cyber-blue' : 'text-cyberLight-purple hover:text-cyberLight-blue'} transition-colors duration-300`}
                    whileHover={{ x: 3 }}
                  >
                    <span className="mr-1">View Paper</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                )}
              </div>
              
              {/* Animated lines on hover */}
              <motion.div 
                className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-${isDarkMode ? 'cyber-purple' : 'cyberLight-purple'}/50 to-transparent`}
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications; 