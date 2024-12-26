import { useRef, useEffect, useState } from 'react';
import { PortfolioItem } from './types';
import PortfolioCard from './PortfolioCard';

interface Props {
  items: PortfolioItem[];
}

export default function PortfolioCarousel({ items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let currentPosition = 0;
    const speed = 1; // Pixels per frame

    const animate = () => {
      if (!isMouseOver) {
        currentPosition += speed;
        
        // Reset position when we've scrolled through half the content
        if (currentPosition >= scrollContainer.scrollWidth / 2) {
          currentPosition = 0;
          scrollContainer.scrollLeft = 0;
        }
        
        scrollContainer.scrollLeft = currentPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isMouseOver]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className="flex gap-6 overflow-x-auto scroll-smooth"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Repeat items three times to create seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <PortfolioCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}