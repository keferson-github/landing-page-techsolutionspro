import { ReactNode } from 'react';
import { useParallax } from './useParallax';

interface Props {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export default function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  disabled = false
}: Props) {
  const sectionRef = useParallax<HTMLDivElement>({ speed, direction, disabled });

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}