import React from 'react';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
            Soporte y Contacto
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Estamos aquí para resolver todas tus dudas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
              <Phone size={28} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600 text-center">+34 600 123 456</p>
            </div>
            
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
              <Mail size={28} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-center">info@verificacionmeta.com</p>
            </div>
            
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
              <Clock size={28} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Horario</h3>
              <p className="text-gray-600 text-center">Lun-Vie: 9am - 6pm</p>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">¿Tienes dudas?</h3>
            <p className="text-lg mb-6">Nuestro equipo de expertos está disponible para resolver todas tus preguntas.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center mx-auto">
              <MessageCircle size={20} className="mr-2" />
              Hablar con un asesor
            </button>
          </div>
        </div>
      </div>
      
      {/* WhatsApp floating button */}
      <a 
        href="https://wa.me/34600123456" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Chat en WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </section>
  );
};

export default SupportSection;