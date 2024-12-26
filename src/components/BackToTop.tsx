import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}