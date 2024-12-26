import { useInfiniteTypeWriter } from './useInfiniteTypeWriter';

interface InfiniteTypeWriterProps {
  text: string;
  className?: string;
  typeSpeed?: number;
  eraseSpeed?: number;
  pauseDuration?: number;
}

export default function InfiniteTypeWriter({
  text,
  className = '',
  typeSpeed = 100,
  eraseSpeed = 50,
  pauseDuration = 1500
}: InfiniteTypeWriterProps) {
  const { displayText, isTyping, isErasing } = useInfiniteTypeWriter(text, {
    typeSpeed,
    eraseSpeed,
    pauseDuration
  });
  
  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block w-0.5 h-[1em] ml-1 ${
          isTyping || isErasing ? 'animate-pulse' : ''
        } bg-current`}
      />
    </span>
  );
}