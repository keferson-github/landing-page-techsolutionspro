import { useState, useEffect } from 'react';

interface TypeWriterState {
  displayText: string;
  isComplete: boolean;
}

export function useTypeWriter(
  text: string,
  speed: number = 100,
  startTyping: boolean = true
) {
  const [state, setState] = useState<TypeWriterState>({
    displayText: '',
    isComplete: false
  });

  useEffect(() => {
    if (!startTyping) return;
    
    if (state.displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setState(prev => ({
          displayText: text.substring(0, prev.displayText.length + 1),
          isComplete: prev.displayText.length + 1 === text.length
        }));
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [state.displayText, text, speed, startTyping]);

  return state;
}