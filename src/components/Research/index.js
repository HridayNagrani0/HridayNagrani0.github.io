import React from 'react';
import { portfolioData } from '../../data/content';

const Research = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Research Projects
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.research.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-102"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 dark:text-blue-400">
                {project.publication}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
              >
                View Publication
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;