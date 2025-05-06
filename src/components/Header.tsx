import React, { useState, useEffect } from 'react';
import { Menu, X, BadgeCheck } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BadgeCheck size={28} className={`${isScrolled ? 'text-blue-600' : 'text-white'} mr-2`} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Verificación Meta
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {['info-section', 'verification-form'].map((id, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(id)} 
                      className={`${
                        isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                      } font-medium transition-colors`}
                    >
                      {id === 'info-section' ? '¿Qué es?' : 'Solicitar'}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="https://i.imgur.com/58gnphy.png"
                className="h-8 w-auto object-contain"
              />
              <img 
                src="https://i.imgur.com/58gnphy.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain"
              />
            </picture>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-6 py-8">
              {['info-section', 'verification-form'].map((id, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(id)} 
                    className="text-gray-800 font-medium text-xl"
                  >
                    {id === 'info-section' ? '¿Qué es el Sello Azul?' : 'Solicitar Verificación'}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;