import { useState, useEffect } from 'react';

interface TypewriterState {
  displayText: string;
  isTyping: boolean;
  isDone: boolean;
}

export function useTypewriterEffect(
  texts: string[],
  options = {
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenTexts: 2000
  }
) {
  const [state, setState] = useState<TypewriterState>({
    displayText: '',
    isTyping: true,
    isDone: false
  });
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (state.isTyping) {
      if (state.displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setState(prev => ({
            ...prev,
            displayText: currentText.slice(0, prev.displayText.length + 1)
          }));
        }, options.typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setState(prev => ({ ...prev, isTyping: false }));
        }, options.delayBetweenTexts);
      }
    } else {
      if (state.displayText.length > 0) {
        timeout = setTimeout(() => {
          setState(prev => ({
            ...prev,
            displayText: prev.displayText.slice(0, -1)
          }));
        }, options.deleteSpeed);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setState(prev => ({ ...prev, isTyping: true }));
      }
    }

    return () => clearTimeout(timeout);
  }, [state, textIndex, texts, options.typeSpeed, options.deleteSpeed, options.delayBetweenTexts]);

  return {
    text: state.displayText,
    isTyping: state.isTyping,
    isDone: state.isDone
  };
}