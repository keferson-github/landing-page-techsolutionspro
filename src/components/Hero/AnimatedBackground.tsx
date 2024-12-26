import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <motion.div 
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ 
        scale: 1,
        opacity: 0.15,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
}