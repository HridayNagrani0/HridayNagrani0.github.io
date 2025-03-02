import React from 'react';
import { experience } from '../../data/content';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative" id="experience">
      {/* Background decoration elements */}
      <div className="absolute -right-10 top-1/3 w-64 h-64 bg-cyber-neon opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-1/4 w-72 h-72 bg-cyber-cyan opacity-5 rounded-full blur-3xl"></div>
      
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-cyan to-cyber-neon bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Building the future at the intersection of AI and Extended Reality
      </motion.p>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Experience card */}
            <div className="bg-cyber-medium border border-cyber-cyan/20 rounded-lg p-6 relative overflow-hidden">
              {/* Digital circuit decoration */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyber-cyan opacity-50"></div>
              
              {/* Role & Duration container */}
              <div className="flex flex-col md:flex-row justify-between mb-6 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-cyber-cyan mb-2">
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="px-3 py-1 bg-cyber-dark text-cyber-neon rounded-full text-sm border border-cyber-neon/20 whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
              </div>
              
              {/* Location */}
              {exp.location && (
                <div className="mb-4 text-gray-300 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {exp.location}
                </div>
              )}
              
              {/* Responsibilities - bullet points */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="space-y-2 mb-4 text-gray-200">
                  <ul className="pl-5 space-y-2">
                    {exp.responsibilities.map((responsibility, i) => {
                      // Transform markdown-style links to HTML
                      const formattedText = responsibility.replace(
                        /\[([^\]]+)\]\(([^)]+)\)/g,
                        `<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyber-neon hover:text-cyber-cyan underline z-50 relative">$1</a>`
                      );
                      
                      return (
                        <motion.li 
                          key={i}
                          className="list-disc list-outside text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          dangerouslySetInnerHTML={{ __html: formattedText }}
                        />
                      );
                    })}
                  </ul>
                </div>
              )}
              
              {/* Add explicit link if present */}
              {exp.link && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-cyber-neon hover:text-cyber-cyan transition-colors duration-200 underline"
                  >
                    {exp.linkText || "View More"} 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </motion.div>
              )}
              
              {/* Technologies */}
              {exp.technologies && (
                <div className="mt-4">
                  <h4 className="text-white text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {typeof exp.technologies === 'string' && 
                      exp.technologies.split(',').map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-cyber-dark text-cyber-cyan rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(0, 245, 255, 0.3)' }}
                        >
                          {tech.trim()}
                        </motion.span>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
            
            {/* Connection line between cards (except last item) */}
            {index < experience.length - 1 && (
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-cyber-cyan/40 to-transparent"
                style={{ top: '100%' }}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;