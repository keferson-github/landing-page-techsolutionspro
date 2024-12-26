import { motion } from 'framer-motion';
import TestimonialsCarousel from './TestimonialsCarousel';
import FadeIn from '../common/animations/FadeIn';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              O Que Nossos Clientes Dizem
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conheça as experiências de quem já transformou seu negócio com nossas soluções.
            </motion.p>
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TestimonialsCarousel />
        </motion.div>
      </div>
    </section>
  );
}