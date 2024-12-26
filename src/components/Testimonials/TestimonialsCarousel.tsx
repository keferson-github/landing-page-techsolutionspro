import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from './testimonialData';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = window.innerWidth >= 768 ? 2 : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center">
        <button
          onClick={prevPage}
          className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-colors backdrop-blur-sm"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="overflow-hidden px-4 py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {getCurrentItems().map((testimonial, index) => (
              <TestimonialCard key={`${currentPage}-${index}`} {...testimonial} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center">
        <button
          onClick={nextPage}
          className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-colors backdrop-blur-sm"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === index ? 'bg-purple-600' : 'bg-purple-600/20'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}