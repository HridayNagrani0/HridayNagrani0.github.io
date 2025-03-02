import React from 'react';
import { publications } from '../../data/content';
import { motion } from 'framer-motion';

const Publications = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="publications">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Publications & Research
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {publications.map((publication, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              {publication.title}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {publication.authors}
            </div>
            <div className="border-l-4 border-blue-500 pl-4 mb-4 italic text-gray-500 dark:text-gray-400">
              {publication.conference}, {publication.date}
            </div>
            <div 
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: publication.description }}
            />
            
            {publication.doi && (
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                DOI: {publication.doi}
              </div>
            )}
            
            {publication.link && (
              <div className="text-right">
                <a 
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View on IEEE Xplore
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications; 