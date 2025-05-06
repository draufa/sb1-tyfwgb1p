import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 opacity-10 pattern-grid-lg"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500 bg-opacity-30 rounded-full mb-8">
            <BadgeCheck size={40} className="text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Potencia tu Presencia Digital con el Sello Azul
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            No esperes más para dar el siguiente paso en tu carrera digital. 
            Únete a miles de creadores verificados y destaca tu autenticidad.
          </p>
          
          <div className="flex justify-center">
            <a
              href="https://global.mundpay.com/2o68l1u4lo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Obtener con Descuento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">+10K</h3>
              <p>Perfiles Verificados</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p>Soporte Dedicado</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">15 días</h3>
              <p>Tiempo Promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;