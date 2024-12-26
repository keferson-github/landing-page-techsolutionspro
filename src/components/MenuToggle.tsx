import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuToggle({ isOpen, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 w-10 h-10 flex items-center justify-center text-white"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              className="absolute w-full h-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                exit: { opacity: 0 }
              }}
            >
              {/* Close icon lines */}
              <motion.span
                className="absolute top-1/2 left-0 w-full h-0.5 bg-current rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 45 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-1/2 left-0 w-full h-0.5 bg-current rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: -45 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              className="absolute w-full h-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
                exit: { opacity: 0 }
              }}
            >
              {/* Hamburger menu lines */}
              <motion.span
                className="absolute top-1/4 left-0 w-full h-0.5 bg-current rounded-full"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="absolute top-1/2 left-0 w-full h-0.5 bg-current rounded-full"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              />
              <motion.span
                className="absolute bottom-1/4 left-0 w-full h-0.5 bg-current rounded-full"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}