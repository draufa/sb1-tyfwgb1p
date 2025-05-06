import React, { useState } from 'react';
import { Send } from 'lucide-react';

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    profileLink: '',
    email: '',
    category: '',
    justification: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        profileLink: '',
        email: '',
        category: '',
        justification: ''
      });
    }, 5000);
  };
  
  return (
    <section className="py-20 bg-white" id="verification-form">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
            Formulario de Solicitud
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Completa el formulario para comenzar tu proceso de verificación
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">¡Solicitud Enviada!</h3>
              <p className="text-gray-600">Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="profileLink" className="block text-gray-700 font-medium mb-2">Enlace del perfil</label>
                <input
                  type="url"
                  id="profileLink"
                  name="profileLink"
                  placeholder="https://instagram.com/tu_usuario o https://facebook.com/tu_usuario"
                  value={formData.profileLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Categoría</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="influencer">Influencer</option>
                  <option value="business">Empresa</option>
                  <option value="public_figure">Figura pública</option>
                  <option value="creator">Creador de contenido</option>
                  <option value="media">Medio de comunicación</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label htmlFor="justification" className="block text-gray-700 font-medium mb-2">Justificación breve</label>
                <textarea
                  id="justification"
                  name="justification"
                  value={formData.justification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  rows={4}
                  placeholder="Explica brevemente por qué deberías recibir el sello azul..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
              >
                Enviar Solicitud
                <Send size={20} className="ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;