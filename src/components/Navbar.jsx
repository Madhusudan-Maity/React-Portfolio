import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.45, 0, 0.55, 1]
      }
    })
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Navbar Header */}
        <div className="bg-primary-50/80 dark:bg-primary-900/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">
                Madhusudan Maity
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative text-lg font-medium transition-colors duration-300 hover:text-accent"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-300"
                >
                  {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                </motion.button>
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="flex items-center space-x-4 md:hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-300"
                >
                  {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                </motion.button>
                
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-300"
                >
                  <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                  >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-primary-50/95 dark:bg-primary-900/95 backdrop-blur-sm md:hidden"
            >
              <div className="container mx-auto px-4 h-full flex items-center justify-center">
                <motion.div 
                  className="flex flex-col items-center space-y-8"
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      custom={i}
                      variants={itemVariants}
                    >
                      <Link
                        to={item.path}
                        className="text-4xl font-medium hover:text-accent transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;