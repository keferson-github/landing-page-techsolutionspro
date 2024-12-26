import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-300" />
        ) : (
          <Moon className="w-5 h-5 text-purple-300" />
        )}
      </motion.div>
    </button>
  );
}