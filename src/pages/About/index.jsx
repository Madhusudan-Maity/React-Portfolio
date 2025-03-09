import { motion } from 'framer-motion';

function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'ClamAV', 'AWS'] },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert mb-12"
          >
            <p className="text-xl leading-relaxed mb-6">
              I'm a passionate developer focused on creating elegant solutions to complex problems.
              With a strong foundation in both frontend and backend development, I bring ideas to
              life through clean code and intuitive user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {skills.map((skillSet, index) => (
              <div
                key={skillSet.category}
                className="bg-primary-100 dark:bg-primary-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;