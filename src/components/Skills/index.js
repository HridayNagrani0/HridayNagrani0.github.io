import React from 'react';
import { skills } from '../../data/content';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Web Development */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.webDevelopment.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Programming and Machine Learning */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Programming & Machine Learning
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.programmingAndML.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;