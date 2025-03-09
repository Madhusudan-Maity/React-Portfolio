import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase } from 'react-icons/fi';

const skills = [
  {
    category: "Frontend Development",
    icon: <FiLayout />,
    items: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend Development",
    icon: <FiServer />,
    items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"]
  },
  {
    category: "Database",
    icon: <FiDatabase />,
    items: ["MongoDB", "MySQL", "SQL"]
  },
  {
    category: "Programming Languages",
    icon: <FiCode />,
    items: ["JavaScript", "C", "Java"]
  }
];

const About = () => {
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
    <div className="py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
        >
          About Me
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="prose prose-lg dark:prose-invert mb-12"
        >
          <p>
            Hi! I'm a passionate Full Stack Developer with a love for creating beautiful,
            functional, and user-friendly web applications. With several years of experience
            in web development, I specialize in building modern applications using the latest
            technologies and best practices.
          </p>
          <p>
            My journey in web development started with curiosity and has evolved into a
            career filled with continuous learning and exciting projects. I believe in
            writing clean, maintainable code and creating intuitive user experiences.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-purple-600 dark:text-purple-400">
                  {skillGroup.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm always interested in hearing about new projects and opportunities.
            Whether you need a web application built from scratch or want to improve an existing one,
            I'm here to help turn your ideas into reality.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;