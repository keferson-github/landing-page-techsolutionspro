import { Youtube, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Newsletter from './Newsletter/Newsletter';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Tech Solutions Pro</h3>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Transformando ideias em soluções digitais de alto desempenho.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-2">
              <a href="mailto:contato@techsolutionspro.com" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-purple-500 transition-colors">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contato@techsolutionspro.com</span>
              </a>
              <a href="tel:+551193703-9913" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-purple-500 transition-colors">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+55 (11) 93703-9913</span>
              </a>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPin size={18} className="mr-2 flex-shrink-0" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-500 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-purple-500 transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="w-full flex justify-center md:justify-start">
              <Newsletter />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Tech Solutions Pro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}