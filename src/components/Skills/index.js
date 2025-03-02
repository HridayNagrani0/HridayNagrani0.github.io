import React, { useState } from 'react';
import { skills } from '../../data/content';
import { motion } from 'framer-motion';

const skillCategories = [
  { id: 'programmingAndML', label: 'AI & Programming' },
  { id: 'webDevelopment', label: 'Web & Cloud' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programmingAndML');
  
  return (
    <div className="container mx-auto px-4 py-16 relative" id="skills">
      {/* Background decoration elements */}
      <div className="absolute -right-10 top-1/4 w-60 h-60 bg-cyber-neon opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-1/3 w-40 h-40 bg-cyber-cyan opacity-5 rounded-full blur-3xl"></div>
      
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-cyan to-cyber-neon bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Specialized expertise in AI, Computer Vision and Extended Reality technologies
      </motion.p>
      
      {/* Category tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-cyber-dark/50 p-1 rounded-lg">
          {skillCategories.map(category => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-cyber-medium text-cyber-cyan shadow-glow-cyan'
                  : 'text-gray-400 hover:text-white'
              } transition-all duration-300`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Skills cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {skills[activeCategory]?.map((skill, index) => {
            // Assign a color based on skill type (for visual grouping)
            let colorClass = 'from-cyber-cyan to-cyber-blue';
            if (skill.toLowerCase().includes('unity') || skill.toLowerCase().includes('quest') || skill.toLowerCase().includes('vr')) {
              colorClass = 'from-cyber-neon to-cyber-cyan';
            } else if (skill.toLowerCase().includes('tensorflow') || skill.toLowerCase().includes('pytorch') || skill.toLowerCase().includes('ml')) {
              colorClass = 'from-cyber-purple to-cyber-blue';
            } else if (skill.toLowerCase().includes('aws') || skill.toLowerCase().includes('azure') || skill.toLowerCase().includes('cloud')) {
              colorClass = 'from-cyber-blue to-cyber-purple';
            }
            
            return (
              <motion.div
                key={index}
                className="bg-cyber-medium border border-cyber-cyan/20 rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -5 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                {/* Skill content */}
                <div className="p-4 relative z-10">
                  <div
                    className={`h-1.5 w-8 mb-2 rounded-full bg-gradient-to-r ${colorClass}`}
                  ></div>
                  
                  <h3 className="text-white font-medium">
                    {skill}
                  </h3>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      strokeLinecap="round" 
                      className={`text-cyber-cyan opacity-50`}
                      d="M24 0v12 M12 0h12" 
                    />
                  </svg>
                </div>
                
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Animated tech pattern */}
      <div className="mt-16 max-w-5xl mx-auto relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cyber-dark/30 rounded-lg border border-cyber-cyan/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/60 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <div className="py-8 px-6 relative z-10">
          <h3 className="text-center text-xl font-bold mb-6 bg-gradient-to-r from-cyber-cyan to-cyber-neon bg-clip-text text-transparent">
            AR/VR Development Journey
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3 rounded-full bg-cyber-dark border border-cyber-cyan/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300">Unity & C#<br/>Foundations</span>
            </div>
            
            <motion.div 
              className="w-12 h-[2px] mt-8 bg-gradient-to-r from-cyber-cyan/60 to-cyber-cyan/20"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3 rounded-full bg-cyber-dark border border-cyber-neon/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyber-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300">AR/VR<br/>Integration</span>
            </div>
            
            <motion.div 
              className="w-12 h-[2px] mt-8 bg-gradient-to-r from-cyber-neon/60 to-cyber-neon/20"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3 rounded-full bg-cyber-dark border border-cyber-purple/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyber-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <span className="text-sm text-gray-300">Computer Vision<br/>Integration</span>
            </div>
            
            <motion.div 
              className="w-12 h-[2px] mt-8 bg-gradient-to-r from-cyber-purple/60 to-cyber-purple/20"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
            />
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3 rounded-full bg-cyber-dark border border-cyber-blue/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300">Multi-user XR<br/>Applications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;