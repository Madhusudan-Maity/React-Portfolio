import { motion } from 'framer-motion';

const Pattern = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Radial gradient pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
        <div className="w-full h-full bg-pattern-dots" />
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-300/30 dark:bg-purple-900/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '10%',
          left: '20%',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-300/30 dark:bg-blue-900/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          top: '50%',
          right: '20%',
        }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10" />
    </div>
  );
};

export default Pattern; 