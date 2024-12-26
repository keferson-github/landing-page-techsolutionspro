import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TypeWriter from './common/TypeWriter/TypeWriter';
import ScaleIn from './common/animations/ScaleIn';

export default function Hero() {
  const texts = [
    'Transformamos Ideias',
    'Em Soluções Digitais',
    'De Alto Desempenho'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-black to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypeWriter 
            texts={texts}
            speed={150}
            className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text"
          />
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Desenvolvimento profissional de websites, aplicativos e soluções SaaS para impulsionar o seu negócio.
        </motion.p>
        
        <ScaleIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Primary CTA - Solicitar Orçamento */}
            <motion.a
              href="#contact"
              className="relative group overflow-hidden px-8 py-4 rounded-xl bg-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              {/* Button content */}
              <span className="relative z-10 font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                Solicitar Orçamento
              </span>
              
              {/* Shine animation */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12" />
            </motion.a>

            {/* Secondary CTA - Nossos Serviços */}
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-300 rounded-xl opacity-75 blur-[2px]" />
              
              {/* Button container */}
              <a
                href="#services"
                className="relative flex items-center justify-center px-8 py-4 bg-black rounded-xl"
              >
                {/* Inner gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-900/50 to-purple-800/50 opacity-50" />
                
                {/* Button content */}
                <div className="relative flex items-center justify-center gap-2 z-10">
                  <span className="font-bold text-lg bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                    Nossos Serviços
                  </span>
                  <ArrowRight className="w-5 h-5 text-purple-200" />
                </div>
              </a>
            </motion.div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}