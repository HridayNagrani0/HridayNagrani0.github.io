import React from 'react';
import { education } from '../../data/content';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative" id="education">
      {/* Background decoration elements */}
      <div className="absolute -left-10 top-1/4 w-40 h-40 bg-cyber-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -right-10 bottom-1/3 w-60 h-60 bg-cyber-cyan opacity-5 rounded-full blur-3xl"></div>
      
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Academic foundation in cutting-edge technologies
      </motion.p>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-cyan/10 via-cyber-blue/30 to-cyber-purple/10"></div>
        
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute top-0 left-0 md:left-auto md:-left-[10px] md:right-auto md:-translate-x-1/2 w-[20px] h-[20px] rounded-full bg-cyber-medium border-2 border-cyber-cyan z-10"></div>
            
            {/* Content card */}
            <div className="bg-cyber-medium border border-cyber-cyan/20 rounded-lg p-6 relative overflow-hidden ml-8 md:ml-0">
              {/* Tech corner accent */}
              <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-cyber-cyan/30"></div>
              
              {/* School & Duration */}
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-white mb-2 md:mb-0">
                  {edu.school}
                </h3>
                <span className="text-cyber-cyan border border-cyber-cyan/30 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              
              {/* Degree */}
              <div className="mb-4">
                <motion.span 
                  className="text-lg text-cyber-blue inline-block"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {edu.degree}
                </motion.span>
              </div>
              
              {/* Location & GPA */}
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <p className="text-gray-300 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </p>
                {edu.gpa && (
                  <p className="font-medium text-white mt-2 md:mt-0">
                    <span className="text-cyber-neon">GPA:</span> {edu.gpa}
                  </p>
                )}
              </div>
              
              {/* Relevant Courses (matches the content.js structure) */}
              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-white text-sm mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-cyber-dark text-cyber-cyan/80 rounded-md text-xs border border-cyber-cyan/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* For backward compatibility if courses is a string instead of array */}
              {edu.courses && typeof edu.courses === 'string' && (
                <div className="mt-4">
                  <h4 className="text-white text-sm mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.split(',').map((course, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 bg-cyber-dark text-cyber-cyan/80 rounded-md text-xs border border-cyber-cyan/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                      >
                        {course.trim()}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education; 