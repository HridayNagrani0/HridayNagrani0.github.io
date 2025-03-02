import React from 'react';
import { education } from '../../data/content';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="education">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Education
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">
                {edu.school}
              </h3>
              <span className="text-gray-600 dark:text-gray-400">
                {edu.duration}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-lg text-blue-600 dark:text-blue-400">
                {edu.degree}
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-300">
                {edu.location}
              </p>
              {edu.gpa && (
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
            
            {edu.relevantCourses && (
              <div className="mt-4">
                <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education; 