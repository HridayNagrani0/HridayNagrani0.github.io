import React, { useState } from 'react';
import { projects } from '../../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Extract unique technology categories
  const allTechnologies = ['All'];
  projects.forEach(project => {
    if (project.technologies) {
      const techs = typeof project.technologies === 'string' 
        ? project.technologies.split(',').map(t => t.trim()) 
        : project.technologies;
      
      techs.forEach(tech => {
        if (!allTechnologies.includes(tech)) {
          allTechnologies.push(tech);
        }
      });
    }
  });
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => {
        const techs = typeof project.technologies === 'string' 
          ? project.technologies.split(',').map(t => t.trim())
          : project.technologies;
        return techs.includes(activeFilter);
      });

  return (
    <div className="container mx-auto px-4 py-16 relative" id="projects">
      {/* Background decoration elements */}
      <div className="absolute -left-20 top-1/3 w-80 h-80 bg-cyber-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-cyber-neon opacity-5 rounded-full blur-3xl"></div>
      
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-neon to-cyber-purple bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Projects
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Innovative solutions at the intersection of AI, Computer Vision, and Extended Reality
      </motion.p>
      
      {/* Technology filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {allTechnologies.slice(0, 8).map((tech, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 rounded-full text-sm border ${
              activeFilter === tech 
                ? 'bg-cyber-neon/20 border-cyber-neon text-cyber-neon' 
                : 'bg-cyber-dark border-cyber-blue/30 text-gray-300 hover:border-cyber-cyan/50'
            } transition-all duration-300`}
            onClick={() => setActiveFilter(tech)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-cyber-medium border border-cyber-cyan/20 rounded-lg overflow-hidden h-full relative">
                {/* Hover effects */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-cyber-neon/30 to-cyber-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none`}
                ></div>
                
                {/* Digital corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 border-t-[16px] border-r-[16px] border-cyber-neon/40"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative z-10 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-neon transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  {project.technologies && (
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {typeof project.technologies === 'string' 
                          ? project.technologies.split(',').map((tech, i) => (
                              <motion.span
                                key={i}
                                className="px-2 py-1 bg-cyber-dark text-xs text-cyan-300 rounded-md border border-cyan-500/20"
                                whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0,255,255,0.3)' }}
                              >
                                {tech.trim()}
                              </motion.span>
                            ))
                          : project.technologies && project.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                className="px-2 py-1 bg-cyber-dark text-xs text-cyan-300 rounded-md border border-cyan-500/20"
                                whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0,255,255,0.3)' }}
                              >
                                {tech}
                              </motion.span>
                            ))
                        }
                      </div>
                    </div>
                  )}
                  
                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-cyber-dark hover:bg-cyber-dark/80 text-cyber-cyan border border-cyber-cyan/30 rounded-md text-sm transition-all"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </motion.a>
                    )}
                    
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-cyber-neon/20 hover:bg-cyber-neon/30 text-cyber-neon border border-cyber-neon/30 rounded-md text-sm transition-all"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(80, 250, 123, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Animated circuit lines */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: hoveredProject === project.title ? 1 : 0,
                    opacity: hoveredProject === project.title ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;