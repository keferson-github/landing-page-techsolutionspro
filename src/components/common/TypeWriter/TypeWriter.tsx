import { useTypewriterEffect } from './useTypewriterEffect';
import Cursor from './Cursor';

interface TypeWriterProps {
  texts: string[];
  className?: string;
  speed?: number;
}

export default function TypeWriter({
  texts,
  className = '',
  speed = 100
}: TypeWriterProps) {
  const { text, isTyping } = useTypewriterEffect(texts, {
    typeSpeed: speed,
    deleteSpeed: speed / 2,
    delayBetweenTexts: 2000
  });

  return (
    <span className={className}>
      {text}
      <Cursor 
        isTyping={isTyping} 
        className="bg-gradient-to-r from-purple-400 to-purple-600" 
      />
    </span>
  );
}