import React from 'react';
import { publications } from '../../data/content';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative" id="research">
      {/* Background decorative elements */}
      <div className="absolute -right-20 top-40 w-72 h-72 bg-cyber-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 bottom-1/3 w-48 h-48 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
      
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Research Publications
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
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
            className="bg-cyber-medium border border-cyber-purple/30 rounded-lg p-6 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(110, 60, 188, 0.15)' }}
          >
            {/* Tech pattern background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Glowing accent */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyber-purple opacity-60"></div>
            
            {/* Neural network decoration */}
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="5" fill="white"/>
                <circle cx="50" cy="20" r="5" fill="white"/>
                <circle cx="80" cy="20" r="5" fill="white"/>
                <circle cx="35" cy="50" r="5" fill="white"/>
                <circle cx="65" cy="50" r="5" fill="white"/>
                <circle cx="50" cy="80" r="5" fill="white"/>
                <line x1="20" y1="20" x2="35" y2="50" stroke="white" strokeWidth="1"/>
                <line x1="50" y1="20" x2="35" y2="50" stroke="white" strokeWidth="1"/>
                <line x1="50" y1="20" x2="65" y2="50" stroke="white" strokeWidth="1"/>
                <line x1="80" y1="20" x2="65" y2="50" stroke="white" strokeWidth="1"/>
                <line x1="35" y1="50" x2="50" y2="80" stroke="white" strokeWidth="1"/>
                <line x1="65" y1="50" x2="50" y2="80" stroke="white" strokeWidth="1"/>
              </svg>
            </div>
            
            {/* Research content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-purple transition-colors duration-300">
                {publication.title}
              </h3>
              
              <div className="flex items-center mb-3 text-cyber-blue">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm">{publication.authors}</span>
              </div>
              
              <div className="flex items-center mb-4 text-gray-400">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{publication.date}</span>
              </div>
              
              <div className="mb-5 text-gray-300" dangerouslySetInnerHTML={{ __html: publication.description }}></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <span className="text-cyber-purple mb-2 sm:mb-0 text-sm">
                  {publication.conference}
                </span>
                <div className="flex gap-4">
                  {publication.doi && (
                    <motion.div
                      className="text-gray-400 text-xs border border-gray-700 rounded px-2 py-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      DOI: {publication.doi}
                    </motion.div>
                  )}
                  <motion.a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-cyan hover:text-cyber-cyan/80 flex items-center"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <span>View Publication</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
            
            {/* Animated tech scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-cyber-purple/30 z-10"
              style={{ top: '80%' }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Research;