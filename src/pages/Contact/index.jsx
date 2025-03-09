import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration will be implemented here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8">Contact</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg text-primary-600 dark:text-primary-400 mb-6">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    📧
                  </span>
                  <a href="mailto:hello@example.com" className="link-hover">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    📱
                  </span>
                  <a href="tel:+1234567890" className="link-hover">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-800 focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-800 focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-800 focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-medium"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;