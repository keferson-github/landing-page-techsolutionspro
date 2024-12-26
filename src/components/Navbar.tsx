import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import MenuToggle from './MenuToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className={`relative z-50 ${isMenuOpen ? 'bg-transparent' : 'bg-black/50 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2">Serviços</a>
                <a href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2">Portfólio</a>
                <a href="#faq" className="text-gray-300 hover:text-white px-3 py-2">FAQ</a>
                <a href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded-md">Contato</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <MenuToggle 
                isOpen={isMenuOpen} 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
              />
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}