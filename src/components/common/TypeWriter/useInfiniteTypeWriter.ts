import { useState, useEffect } from 'react';

type TypewriterPhase = 'typing' | 'erasing' | 'pausing';

interface TypeWriterState {
  displayText: string;
  phase: TypewriterPhase;
}

export function useInfiniteTypeWriter(
  text: string,
  options = {
    typeSpeed: 100,
    eraseSpeed: 50,
    pauseDuration: 1500,
  }
) {
  const [state, setState] = useState<TypeWriterState>({
    displayText: '',
    phase: 'typing'
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (state.phase) {
      case 'typing':
        if (state.displayText.length < text.length) {
          timeout = setTimeout(() => {
            setState(prev => ({
              displayText: text.substring(0, prev.displayText.length + 1),
              phase: 'typing'
            }));
          }, options.typeSpeed);
        } else {
          timeout = setTimeout(() => {
            setState(prev => ({ ...prev, phase: 'pausing' }));
          }, options.pauseDuration);
        }
        break;

      case 'pausing':
        timeout = setTimeout(() => {
          setState(prev => ({ ...prev, phase: 'erasing' }));
        }, options.pauseDuration);
        break;

      case 'erasing':
        if (state.displayText.length > 0) {
          timeout = setTimeout(() => {
            setState(prev => ({
              displayText: prev.displayText.slice(0, -1),
              phase: 'erasing'
            }));
          }, options.eraseSpeed);
        } else {
          timeout = setTimeout(() => {
            setState(prev => ({ ...prev, phase: 'typing' }));
          }, options.pauseDuration);
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [state, text, options.typeSpeed, options.eraseSpeed, options.pauseDuration]);

  return {
    displayText: state.displayText,
    isTyping: state.phase === 'typing',
    isErasing: state.phase === 'erasing'
  };
}