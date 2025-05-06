import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Instagram, Facebook, Loader2, AlertCircle, User, CheckCircle } from 'lucide-react';

interface SocialProfile {
  name: string;
  photo: string;
  bio: string;
  followers: number;
  verified: boolean;
}

const VerificationBadge: React.FC<{ className?: string, platform?: 'instagram' | 'facebook' }> = ({ 
  className = "",
  platform = 'instagram'
}) => {
  const bgColor = platform === 'instagram' ? 'bg-[#3897F0]' : 'bg-[#1877F2]';
  
  return (
    <div className={`inline-flex items-center justify-center w-[18px] h-[18px] ${bgColor} rounded-full ${className}`}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white transform scale-90"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
};

const VerificationSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [platform, setPlatform] = useState<'instagram' | 'facebook'>('instagram');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanUsername = username.replace('@', '').trim();
    
    if (!cleanUsername) {
      setError('Por favor, ingresa un nombre de usuario');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, Math.random() * (7000 - 4000) + 4000));
    
    setIsLoading(false);
    setIsVerified(true);
  };

  const resetModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setUsername('');
      setIsVerified(false);
      setIsLoading(false);
      setError('');
    }, 300);
  };

  const openVerificationModal = (selectedPlatform: 'instagram' | 'facebook') => {
    setPlatform(selectedPlatform);
    setIsOpen(true);
  };

  return (
    <section className="py-20 bg-white" id="verification-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Verificación de Perfil
          </h2>
          
          <div className="flex justify-center mb-12">
            <img
              src="https://i.imgur.com/58gnphy.png"
              alt="Verificación Meta"
              className="h-24 w-auto object-contain opacity-90"
            />
          </div>

          <p className="text-xl text-gray-600 mb-12">
            ¡Ingresa tu perfil en una de las redes Meta para verificar la disponibilidad del sello azul en tu cuenta, toma menos de 1 minuto!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="group relative overflow-hidden bg-gradient-to-r from-[#1877F2] to-[#166BDA] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openVerificationModal('facebook')}
              style={{
                boxShadow: '0 4px 14px rgba(24, 119, 242, 0.3)',
              }}
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Facebook size={24} />
                <span className="font-semibold text-lg">Sello Azul Facebook</span>
              </div>
            </button>
            
            <button
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openVerificationModal('instagram')}
              style={{
                boxShadow: '0 4px 14px rgba(219, 39, 119, 0.3)',
              }}
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Instagram size={24} />
                <span className="font-semibold text-lg">Sello Azul Instagram</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Dialog 
        open={isOpen} 
        onClose={resetModal}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8">
            <Dialog.Title className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              {platform === 'instagram' ? (
                <>
                  <Instagram className="mr-2" size={24} />
                  Verificación Instagram
                </>
              ) : (
                <>
                  <Facebook className="mr-2" size={24} />
                  Verificación Facebook
                </>
              )}
            </Dialog.Title>

            {isLoading ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
                    <div className="w-16 h-16 border-4 border-blue-500 rounded-full absolute top-0 left-0 animate-spin border-t-transparent"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">Verificando perfil...</p>
                <p className="text-gray-500 text-sm mt-2">Esto puede tardar unos segundos</p>
              </div>
            ) : isVerified ? (
              <div className="text-center py-6">
                <div className="mb-8 transform animate-fade-in-up">
                  <p className="text-xl text-gray-800 mb-4">
                    ¡Felicidades! Tu perfil es elegible para recibir el sello de verificación hoy
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                    @{username.replace('@', '')}
                    <VerificationBadge className="ml-1" platform={platform} />
                  </h3>
                </div>
                <a
                  href="https://global.mundpay.com/2o68l1u4lo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold ${
                    platform === 'instagram' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-[#1877F2] hover:bg-[#1664CE]'
                  }`}
                >
                  Obtener Ahora con Descuento
                </a>
              </div>
            ) : (
              <form onSubmit={handleVerification} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                    Nombre de usuario de {platform === 'instagram' ? 'Instagram' : 'Facebook'}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={platform === 'instagram' ? 'tu.perfil' : 'tu.nombre'}
                      className={`w-full pl-8 pr-4 py-3 rounded-lg border ${
                        error ? 'border-red-500' : 'border-gray-300'
                      } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                    />
                  </div>
                  {error && (
                    <p className="mt-2 text-red-500 text-sm flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center font-semibold ${
                    platform === 'instagram'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-[#1877F2] hover:bg-[#1664CE]'
                  }`}
                >
                  Verificar Disponibilidad
                </button>
              </form>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default VerificationSection;