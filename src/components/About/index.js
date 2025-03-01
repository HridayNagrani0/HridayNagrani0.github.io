import React from 'react';
import { bio } from '../../data/content';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About Me
          </h2>
          
          <div className="space-y-6">
            {/* Bio Description */}
            <div className="prose dark:prose-invert max-w-none">
              {bio.description.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 text-lg">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Highlights/Key Points */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bio.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-2"
                  >
                    <svg 
                      className="w-5 h-5 text-blue-500 mt-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 