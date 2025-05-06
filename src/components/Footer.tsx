import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Verificación Meta</h3>
              <p className="text-gray-400 max-w-xs">
                Servicio especializado en la obtención del sello azul para perfiles de Instagram y Facebook.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Verificación Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Verificación Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Asesoría Digital</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p className="mb-4">
              Esta página no está afiliada a Meta Platforms Inc. Solo ofrecemos asesoría en el proceso de solicitud de verificación.
            </p>
            <p>
              © {new Date().getFullYear()} Verificación Meta. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;