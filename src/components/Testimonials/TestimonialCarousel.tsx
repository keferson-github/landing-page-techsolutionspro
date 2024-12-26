import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getTestimonials } from './testimonialData';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = getTestimonials();

  const getVisibleTestimonials = () => {
    if (window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    const secondIndex = (currentIndex + 1) % testimonials.length;
    return [testimonials[currentIndex], testimonials[secondIndex]];
  };

  const handlePrevious = () => {
    setCurrentIndex((current) => {
      if (window.innerWidth < 768) {
        return current === 0 ? testimonials.length - 1 : current - 1;
      }
      return current === 0 ? testimonials.length - 2 : current - 2;
    });
  };

  const handleNext = () => {
    setCurrentIndex((current) => {
      if (window.innerWidth < 768) {
        return (current + 1) % testimonials.length;
      }
      return (current + 2) % testimonials.length;
    });
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative h-[320px] overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-colors backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-colors backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute inset-0 px-4 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full"
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <TestimonialCard key={`${currentIndex}-${idx}`} {...testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: window.innerWidth < 768 ? testimonials.length : Math.ceil(testimonials.length / 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(window.innerWidth < 768 ? index : index * 2)}
            className={`w-2 h-2 rounded-full transition-colors ${
              window.innerWidth < 768 
                ? currentIndex === index ? 'bg-purple-600' : 'bg-purple-600/20'
                : Math.floor(currentIndex / 2) === index ? 'bg-purple-600' : 'bg-purple-600/20'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}