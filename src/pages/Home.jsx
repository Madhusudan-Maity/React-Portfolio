import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-start max-w-4xl mx-auto"
    >
      <motion.p
        variants={itemVariants}
        className="text-purple-600 dark:text-purple-400 font-medium mb-4"
      >
        Hi there! 👋 I'm
      </motion.p>
      
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Madhusudan Maity
      </motion.h1>
      
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-6"
      >
        Full Stack Developer
      </motion.h2>
      
      <motion.p
        variants={itemVariants}
        className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
      >
        I craft beautiful, responsive, and user-friendly web applications using modern technologies.
        Passionate about creating seamless digital experiences that make a difference.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex gap-6"
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300"
        >
          Contact Me
        </Link>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex gap-6 mt-8"
      >
        <a
          href="https://github.com/Madhusudan-Maity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FiGithub />
        </a>
        <a
          href="https://linkedin.com/in/madhusudan-maity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FiLinkedin />
        </a>
        <a
          href="mailto:mad481madhu@gmail.com"
          className="text-2xl text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <FiMail />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Home;