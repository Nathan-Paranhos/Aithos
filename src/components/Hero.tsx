import React from 'react';
import { Logo } from './Logo';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Logo />
        </div>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-gray-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          Landing Pages Profissionais com Atendimento Automatizado
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '1s' }}>
          Criamos e hospedamos sua landing page por apenas R$ 30. Atendimento automatizado, entrega rápida e qualidade profissional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '1.5s' }}>
          <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-700/50 hover:scale-105">
            Criar Minha Landing Page - R$ 30
          </button>
          <button className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-700/50">
            Atendimento Personalizado
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-red-800 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>

      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border-red-900/20 border-r border-b animate-pulse"
              style={{ animationDelay: `${i * 0.01}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};