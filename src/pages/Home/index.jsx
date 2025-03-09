import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
        >
          <h1 className="text-6xl sm:text-8xl font-bold mb-6">
            Creative
            <br />
            Developer
          </h1>
          <p className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 mb-8 max-w-2xl">
            Crafting digital experiences that combine creativity with technical excellence
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-lg font-medium"
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;