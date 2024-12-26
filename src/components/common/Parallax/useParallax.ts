import { useEffect, useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement>({ 
  speed = 0.5,
  direction = 'up',
  disabled = false
}: ParallaxOptions = {}) {
  const elementRef = useRef<T>(null);
  const initialPositionRef = useRef<number>(0);

  useEffect(() => {
    if (disabled) return;

    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + scrolled;
      
      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && 
          scrolled < elementTop + elementRect.height) {
        const offset = (scrolled - elementTop) * speed;
        const yPos = direction === 'up' ? -offset : offset;
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Store initial position
    initialPositionRef.current = element.getBoundingClientRect().top;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) element.style.transform = '';
    };
  }, [speed, direction, disabled]);

  return elementRef;
}