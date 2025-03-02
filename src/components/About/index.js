import React from 'react';
import { bio } from '../../data/content';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative" id="about">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyber-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-cyber-medium border border-cyber-cyan/20 rounded-lg shadow-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Tech circuit pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
          
          {/* Glowing corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyber-cyan opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyber-cyan opacity-60"></div>
          
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6 relative z-10">
            {/* Bio Description */}
            <div className="prose max-w-none">
              {bio.description.split('\n').map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-gray-300 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {/* Highlights/Key Points */}
            {bio.highlights && bio.highlights.length > 0 && (
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bio.highlights.map((highlight, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index + 0.4, duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 mt-1 mr-2 bg-cyber-dark rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyber-cyan rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            {/* Tech scan line animation */}
            <motion.div
              className="absolute left-0 w-full h-[1px] bg-cyber-cyan/30 z-20"
              style={{ top: '50%' }}
              animate={{ opacity: [0.3, 0.5, 0.3], scaleX: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 