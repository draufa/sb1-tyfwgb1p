import React, { useEffect } from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import VerificationSection from './components/VerificationSection';
import BlueBadgeBenefits from './components/BlueBadgeBenefits';
import CTASection from './components/CTASection';

function App() {
  useEffect(() => {
    document.title = "Verificación Meta | Sello Azul Instagram y Facebook";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <InfoSection />
      <VerificationSection />
      <BlueBadgeBenefits />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;