import React from 'react';
import { BadgeCheck } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="info-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <BadgeCheck size={40} className="text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¿Qué es el Sello Azul?
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            El sello azul es una insignia oficial que indica que tu cuenta ha sido verificada por Meta como una presencia auténtica de una figura pública, celebridad o marca global.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Autenticidad</h3>
              <p className="text-gray-600">Confirma que eres quien dices ser ante tu audiencia</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Credibilidad</h3>
              <p className="text-gray-600">Aumenta la confianza y el profesionalismo de tu perfil</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Visibilidad</h3>
              <p className="text-gray-600">Mejora tu alcance y posicionamiento en las búsquedas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;