import React from 'react';
import { publications } from '../../data/content';

const Publications = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="publications">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Publications
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              {pub.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {pub.description}
            </p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications; 