import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import emailjs from 'emailjs-com'; 

const projects = [
  {
    title: "Modern Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Framer Motion. Features include dark mode, custom cursor, animated backgrounds, and smooth page transitions. The site showcases a clean, minimalist design with interactive elements.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    github: "https://github.com/madmadhu76/portfolio",
    demo: "https://madmadhu76-portfolio.vercel.app",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with advanced filtering, search, and payment integration using Next.js and Stripe.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://project-two.demo.com",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/madmadhu76/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "AI Chat Application",
    description: "A real-time chat application powered by AI, featuring natural language processing, sentiment analysis, and automatic language translation.",
    tags: ["OpenAI", "React", "Node.js", "WebSocket", "MongoDB"],
    github: "https://github.com/madmadhu76/ai-chat",
    demo: "https://ai-chat-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  }
];

const Projects = () => {
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
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Featured Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 hover:scale-110 transition-transform duration-300"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 hover:scale-110 transition-transform duration-300"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;