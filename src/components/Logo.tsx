import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <div className="relative w-8 h-8">
        <motion.svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Hexagon background */}
          <motion.path
            d="M16 2L29.856 9V23L16 30L2.144 23V9L16 2Z"
            fill="url(#gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          
          {/* Code brackets */}
          <motion.path
            d="M12 10L8 16L12 22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.path
            d="M20 10L24 16L20 22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="gradient"
              x1="2.144"
              y1="2"
              x2="29.856"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9333EA" />
              <stop offset="1" stopColor="#6B21A8" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col leading-none"
      >
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent tracking-tight">
            TS
          </span>
          <span className="text-lg font-semibold text-purple-300">Pro</span>
        </div>
        <span className="text-[0.65rem] text-purple-400 tracking-[0.2em] uppercase">
          Technology Solutions
        </span>
      </motion.div>
    </motion.div>
  );
}