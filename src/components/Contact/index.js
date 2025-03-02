import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { contact } from '../../data/content';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-16 relative" id="contact">
      {/* Background decoration elements */}
      <div className={`absolute -right-20 top-1/4 w-72 h-72 ${isDarkMode ? 'bg-cyber-cyan' : 'bg-cyberLight-cyan'} opacity-5 rounded-full blur-3xl`}></div>
      <div className={`absolute -left-10 bottom-1/3 w-48 h-48 ${isDarkMode ? 'bg-cyber-neon' : 'bg-cyberLight-neon'} opacity-5 rounded-full blur-3xl`}></div>
      
      <motion.h2 
        className={`text-4xl font-bold text-center mb-4 bg-gradient-to-r from-${isDarkMode ? 'cyber-neon' : 'cyberLight-neon'} to-${isDarkMode ? 'cyber-cyan' : 'cyberLight-cyan'} bg-clip-text text-transparent`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      
      <motion.p 
        className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-12`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Let's collaborate on the next generation of AI and Extended Reality experiences
      </motion.p>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${isDarkMode ? 'bg-cyber-medium' : 'bg-cyberLight-medium'} p-6 rounded-lg border ${isDarkMode ? 'border-cyber-cyan/20' : 'border-cyberLight-cyan/20'} relative transition-colors duration-300`}
          >
            {/* Tech pattern background */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'} opacity-10`}></div>
            
            {/* Glowing accent */}
            <div className={`absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 ${isDarkMode ? 'border-cyber-cyan' : 'border-cyberLight-cyan'} opacity-60`}></div>
            
            <div className="relative z-10">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Connect With Me</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-cyber-dark' : 'bg-cyberLight-dark'} mr-4`}>
                    <svg className={`w-5 h-5 ${isDarkMode ? 'text-cyber-cyan' : 'text-cyberLight-cyan'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>Email</h4>
                    <a href={`mailto:${contact.email}`} className={`${isDarkMode ? 'text-cyber-cyan' : 'text-cyberLight-cyan'} hover:underline`}>
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-cyber-dark' : 'bg-cyberLight-dark'} mr-4`}>
                    <svg className={`w-5 h-5 ${isDarkMode ? 'text-cyber-neon' : 'text-cyberLight-neon'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>LinkedIn</h4>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-cyber-neon' : 'text-cyberLight-neon'} hover:underline`}>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                {/* GitHub */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-cyber-dark' : 'bg-cyberLight-dark'} mr-4`}>
                    <svg className={`w-5 h-5 ${isDarkMode ? 'text-cyber-purple' : 'text-cyberLight-purple'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>GitHub</h4>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-cyber-purple' : 'text-cyberLight-purple'} hover:underline`}>
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <div className="relative">
                  <motion.div
                    className={`absolute -inset-0.5 ${isDarkMode ? 'bg-gradient-to-r from-cyber-cyan to-cyber-blue' : 'bg-gradient-to-r from-cyberLight-cyan to-cyberLight-blue'} opacity-30 blur-sm rounded-lg transition-opacity duration-300`}
                    whileHover={{ opacity: 0.5 }}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full px-4 py-2 border ${isDarkMode ? 'bg-cyber-dark border-cyber-cyan/20 text-white focus:border-cyber-cyan/50' : 'bg-cyberLight-dark border-cyberLight-cyan/20 text-gray-800 focus:border-cyberLight-cyan/50'} rounded-md outline-none relative z-10 transition-colors duration-300`}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <div className="relative">
                  <motion.div
                    className={`absolute -inset-0.5 ${isDarkMode ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue' : 'bg-gradient-to-r from-cyberLight-purple to-cyberLight-blue'} opacity-30 blur-sm rounded-lg transition-opacity duration-300`}
                    whileHover={{ opacity: 0.5 }}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full px-4 py-2 border ${isDarkMode ? 'bg-cyber-dark border-cyber-purple/20 text-white focus:border-cyber-purple/50' : 'bg-cyberLight-dark border-cyberLight-purple/20 text-gray-800 focus:border-cyberLight-purple/50'} rounded-md outline-none relative z-10 transition-colors duration-300`}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <div className="relative">
                  <motion.div
                    className={`absolute -inset-0.5 ${isDarkMode ? 'bg-gradient-to-r from-cyber-neon to-cyber-cyan' : 'bg-gradient-to-r from-cyberLight-neon to-cyberLight-cyan'} opacity-30 blur-sm rounded-lg transition-opacity duration-300`}
                    whileHover={{ opacity: 0.5 }}
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full px-4 py-2 border ${isDarkMode ? 'bg-cyber-dark border-cyber-neon/20 text-white focus:border-cyber-neon/50' : 'bg-cyberLight-dark border-cyberLight-neon/20 text-gray-800 focus:border-cyberLight-neon/50'} rounded-md outline-none relative z-10 transition-colors duration-300`}
                  />
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative"
              >
                <motion.div
                  className={`absolute -inset-0.5 ${isDarkMode ? 'bg-gradient-to-r from-cyber-cyan to-cyber-neon' : 'bg-gradient-to-r from-cyberLight-cyan to-cyberLight-neon'} opacity-50 blur-sm rounded-lg transition-opacity duration-300`}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative z-10 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-cyber-medium text-white hover:bg-cyber-medium/80' 
                      : 'bg-cyberLight-medium text-gray-800 hover:bg-cyberLight-medium/80'
                  } flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
              
              {/* Success/Error Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-md ${isDarkMode ? 'bg-cyber-neon/20 text-cyber-neon' : 'bg-cyberLight-neon/20 text-cyberLight-neon'} text-center`}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;