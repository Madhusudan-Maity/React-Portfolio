import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Pattern from './components/Pattern';
import ScrollToTop from './components/ScrollToTop';
import Routes from './Routes';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="text-4xl font-bold text-gray-800 dark:text-white"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Pattern />
        <CustomCursor />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8 relative z-10"
          >
            <Routes />
          </motion.main>
        </AnimatePresence>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;