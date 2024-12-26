import { motion } from 'framer-motion';

const popupVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: 10,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export default function WhatsAppPopup() {
  return (
    <motion.div
      variants={popupVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute bottom-full right-0 mb-4 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg"
      style={{ 
        filter: 'drop-shadow(0 0 10px rgba(37, 211, 102, 0.3))',
        width: 'max-content'
      }}
    >
      <div className="font-medium">Fale com a nossa equipe! 🙂</div>
      <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
    </motion.div>
  );
}