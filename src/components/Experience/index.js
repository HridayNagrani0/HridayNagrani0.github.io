import React from 'react';
import { experience } from '../../data/content';
import { motion } from 'framer-motion';

const Experience = () => {
  // Helper function to process responsibility text that may contain links
  const processResponsibility = (text) => {
    // Check if the text contains a link marker
    if (text.includes('(<a href=')) {
      // Split the text by the link marker
      const [mainText, linkPart] = text.split('(<a href=');
      // Extract the URL and link text
      const urlMatch = linkPart.match(/'([^']+)'/);
      const url = urlMatch ? urlMatch[1] : '#';
      const linkTextMatch = linkPart.match(/>([^<]+)</);
      const linkText = linkTextMatch ? linkTextMatch[1] : 'View';
      
      return (
        <>
          {mainText} (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {linkText}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          )
        </>
      );
    }
    return text;
  };

  return (
    <div className="container mx-auto px-4 py-16" id="experience">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Professional Experience
      </h2>
      <div className="max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-12">
            {/* Timeline line */}
            {index !== experience.length - 1 && (
              <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            )}
            {/* Timeline dot */}
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-gray-600 dark:text-gray-400">
                  {exp.duration}
                </span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {exp.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.location}
              </p>
              <div className="mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-300 mb-2">
                    • {processResponsibility(resp)}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.split(', ').map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;