import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="absolute inset-0 bg-blue-900 opacity-10 pattern-grid-lg"></div>
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Obtén el Sello Azul Oficial de Instagram y Facebook
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed">
            Accede a nuestra plataforma autorizada para solicitar la verificación de tu perfil Meta de forma segura y profesional.
          </p>
          
          <button 
            className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
            onClick={() => {
              const verificationSection = document.getElementById('verification-section');
              verificationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar Verificación
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;