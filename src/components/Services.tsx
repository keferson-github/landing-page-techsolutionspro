import { Code, Layout, Smartphone, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './common/animations/FadeIn';

const services = [
  {
    icon: Layout,
    title: 'Websites Profissionais',
    description: 'Sites responsivos e otimizados para SEO que convertem visitantes em clientes.',
  },
  {
    icon: Code,
    title: 'Landing Pages',
    description: 'Páginas de alta conversão para suas campanhas de marketing digital.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos para Android e iOS com experiência de usuário excepcional.',
  },
  {
    icon: Cloud,
    title: 'Soluções SaaS',
    description: 'Software como serviço personalizado para automatizar e escalar seu negócio.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos soluções completas em tecnologia para impulsionar seu negócio no mundo digital.
            </p>
          </div>
        </FadeIn>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div 
                className="bg-purple-900/20 backdrop-blur-lg rounded-xl p-6 h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <service.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}