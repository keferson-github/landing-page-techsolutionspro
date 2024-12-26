import { motion } from 'framer-motion';

const emojis = ["🙂", "😊"];

export default function AnimatedEmoji() {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      <motion.span
        initial={{ display: "inline-block" }}
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.2, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.2, 0.5, 0.8],
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        <motion.span
          initial={{ display: "inline-block" }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1.5
          }}
        >
          {emojis[0]}
        </motion.span>
        <motion.span
          initial={{ display: "inline-block", opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1.5
          }}
        >
          {emojis[1]}
        </motion.span>
      </motion.span>
    </motion.span>
  );
}