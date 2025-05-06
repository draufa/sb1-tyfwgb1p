import React from 'react';
import { Shield, TrendingUp, UserCheck, BadgeCheck } from 'lucide-react';

const BlueBadgeBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Autenticidad Garantizada",
      description: "Protege tu identidad y muestra a tus seguidores que tu cuenta es oficial"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Mayor Alcance",
      description: "Aparece con más frecuencia en búsquedas y recomendaciones"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      title: "Credibilidad",
      description: "Gana más confianza del público y socios comerciales"
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
      title: "Recursos Exclusivos",
      description: "Accede a herramientas y funcionalidades disponibles solo para cuentas verificadas"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Ventajas del Sello Azul
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://i.imgur.com/CDg1D26.png"
                alt="Sello de Verificación"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueBadgeBenefits;