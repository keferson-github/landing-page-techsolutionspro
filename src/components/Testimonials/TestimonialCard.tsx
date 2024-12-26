import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Props {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({ name, role, company, testimonial, image }: Props) {
  return (
    <motion.div 
      className="bg-purple-900/20 backdrop-blur-lg p-6 rounded-xl relative h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Quote className="absolute top-6 right-6 text-purple-500/20" size={48} />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
          <p className="text-sm text-purple-400">{company}</p>
        </div>
      </div>
      <p className="text-gray-300 italic line-clamp-3">{testimonial}</p>
    </motion.div>
  );
}