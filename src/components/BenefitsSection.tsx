import React from 'react';
import { ShieldCheck, Users, MessageSquareText, Hourglass } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center md:text-left">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Hourglass size={28} />,
      title: "Proceso Simplificado",
      description: "Nos encargamos de todo el proceso burocrático para que tú solo te preocupes por tu contenido."
    },
    {
      icon: <Users size={28} />,
      title: "Asesoría Personalizada",
      description: "Cada caso es único. Nuestros expertos te guiarán durante todo el proceso de verificación."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "100% Confidencial",
      description: "Tu información está segura con nosotros. Garantizamos total confidencialidad en el proceso."
    },
    {
      icon: <MessageSquareText size={28} />,
      title: "Soporte en Tiempo Real",
      description: "Estamos disponibles para resolver tus dudas en cualquier momento a través de WhatsApp."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
            ¿Por qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Somos especialistas en el proceso de verificación de cuentas de Meta
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Benefit 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;