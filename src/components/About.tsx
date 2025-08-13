import React from 'react';
import { Atom, Cpu, Zap, Beaker } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-black">
      <style>{`
        @keyframes particle-rise {
          0% {
            transform: translateY(100%) scale(0.5);
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-300%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a <span className="text-red-700">Aithos Tech</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Especializados em desenvolvimento web premium com foco na experiência do usuário. 
            Oferecemos soluções automatizadas e personalizadas para seu negócio digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Nossos Valores</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-red-700">Inovação constante:</strong> Sempre buscamos as melhores tecnologias e práticas do mercado.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-red-700">Experiência do usuário:</strong> Priorizamos interfaces intuitivas e experiências memoráveis.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-red-700">Qualidade e confiabilidade:</strong> Entregamos projetos robustos e de alta performance.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-red-700">Estética refinada:</strong> Design diferenciado que destaca sua marca no mercado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { Icon: Zap, title: 'Atendimento Rápido', desc: 'Resposta automatizada em minutos' },
              { Icon: Cpu, title: 'IA Integrada', desc: 'Automações inteligentes' },
              { Icon: Atom, title: 'Design Premium', desc: 'Estética profissional' },
              { Icon: Beaker, title: 'Hospedagem', desc: 'Incluída no pacote básico' }
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-black/70 p-6 rounded-xl border border-red-700/30 hover:border-red-700/60 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden shadow-xl"
              >
                <Icon className="w-8 h-8 text-red-700 mb-3 group-hover:text-red-600 transition-colors duration-300 relative z-10" />
                <h4 className="text-white font-semibold mb-2 relative z-10">{title}</h4>
                <p className="text-gray-400 text-sm relative z-10">{desc}</p>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:animate-[particle-rise_1.5s_ease-out_infinite] pointer-events-none"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 0.8}s`,
                      width: `${1 + Math.random() * 2}px`,
                      height: `${1 + Math.random() * 2}px`,
                      animationDuration: `${1.2 + Math.random() * 0.6}s`
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '100+', label: 'Landing Pages Criadas' },
            { number: 'R$ 30', label: 'Preço Fixo' },
            { number: '24h', label: 'Entrega Máxima' },
            { number: '100%', label: 'Hospedagem Incluída (Netlify)' }
          ].map(({ number, label }) => (
            <div key={label} className="group relative">
              <div className="text-3xl md:text-4xl font-bold text-red-700 group-hover:text-red-600 transition-colors duration-300 relative z-10">
                {number}
              </div>
              <div className="text-gray-300 text-sm mt-2 relative z-10">{label}</div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:animate-[particle-rise_1.5s_ease-out_infinite] pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.6}s`,
                    width: `${1 + Math.random() * 1.5}px`,
                    height:`${1 + Math.random() * 1.5}px`,
                    animationDuration: `${1 + Math.random() * 0.5}s`
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};