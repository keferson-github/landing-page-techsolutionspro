import { useRef, useEffect, useState } from 'react';

const technologies = [
  { name: 'React', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' },
  { name: 'Node.js', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' },
  { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png' },
  { name: 'Python', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png' },
  { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png' },
  { name: 'Docker', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png' },
];

export default function TechLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let currentPosition = 0;

    const animate = () => {
      if (!isMouseOver) {
        currentPosition -= 1;
        
        if (Math.abs(currentPosition) >= container.scrollWidth / 3) {
          currentPosition = 0;
        }
        
        container.style.transform = `translateX(${currentPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isMouseOver]);

  return (
    <div className="py-12 bg-black/50 overflow-hidden">
      <div className="relative">
        <div
          className="flex gap-12 px-6"
          ref={containerRef}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          style={{ willChange: 'transform' }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="w-16 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all flex-none"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}