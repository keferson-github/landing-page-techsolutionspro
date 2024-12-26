import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: {
    name: string;
    role: string;
    company: string;
    testimonial: string;
    image: string;
  };
}

export default function Modal({ isOpen, onClose, testimonial }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="relative bg-purple-900/40 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 shadow-xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-purple-200">{testimonial.role}</p>
                  <p className="text-purple-300">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-gray-200 leading-relaxed">
                {testimonial.testimonial}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}