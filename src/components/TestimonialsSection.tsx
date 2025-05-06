import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={18} 
            className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} mr-1`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center mr-3">
          <span className="text-blue-600 font-semibold">{author.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Recibí el sello azul en solo 15 días. Todo el proceso fue muy profesional.",
      author: "María G.",
      role: "Influencer de Moda",
      rating: 5
    },
    {
      quote: "Al principio estaba escéptico, pero el servicio superó mis expectativas. Ahora mi marca tiene más credibilidad.",
      author: "Carlos R.",
      role: "Empresario",
      rating: 5
    },
    {
      quote: "Excelente servicio y atención personalizada. El equipo me guió en cada paso del proceso.",
      author: "Laura M.",
      role: "Creadora de Contenido",
      rating: 4
    },
    {
      quote: "La verificación ha impulsado mi presencia digital enormemente. Totalmente recomendado.",
      author: "Javier T.",
      role: "Figura Pública",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Experiencias reales de usuarios verificados
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;