import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // Using default testimonials since they're not defined in content.js
  const testimonialsData = [
    {
      id: 1,
      text: "Hriday is an exceptional engineer with strong technical skills and innovative problem-solving abilities.",
      name: "Dr. Jane Smith",
      position: "Professor, Arizona State University",
      image: "/testimonials/placeholder1.jpg"
    },
    {
      id: 2,
      text: "Working with Hriday was a great experience. His knowledge in AI and computer vision significantly improved our project outcomes.",
      name: "John Brown",
      position: "Project Manager, Tech Company",
      image: "/testimonials/placeholder2.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16" id="testimonials">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Testimonials
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 