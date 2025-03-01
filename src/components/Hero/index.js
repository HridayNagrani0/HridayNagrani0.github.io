import React from 'react';
import { bio } from '../../data/content';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {bio.name}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-2">
          {bio.title}
        </h2>
        <p className="text-xl text-gray-300">
          {bio.subtitle}
        </p>
        <div className="mt-8">
          <a 
            href="#about" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 mx-2"
          >
            Learn More
          </a>
          <a 
            href="#contact" 
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300 mx-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;