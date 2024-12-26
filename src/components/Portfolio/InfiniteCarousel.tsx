import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  speed?: number;
}

export default function InfiniteCarousel({ 
  children,
  speed = 30
}: Props) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      setWidth(scrollerRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      <motion.div
        ref={scrollerRef}
        className="flex"
        animate={{ x: [-width, 0] }}
        transition={{
          duration: width / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }}
      >
        <div className="flex space-x-2 px-1">
          {children}
        </div>
        <div className="flex space-x-2 px-1">
          {children}
        </div>
      </motion.div>
    </div>
  );
}