import { motion } from 'framer-motion';

interface CursorProps {
  isTyping: boolean;
  className?: string;
}

export default function Cursor({ isTyping, className = '' }: CursorProps) {
  return (
    <motion.span
      className={`inline-block w-[3px] h-[1.2em] ml-1 align-middle ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [1, 0],
        scaleY: isTyping ? [1, 1] : [1, 0.8]
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 1]
      }}
    />
  );
}