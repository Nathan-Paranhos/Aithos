import React from 'react';
import { Logo } from './Logo';
import { Atom, Code, Brain, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-red-800/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Logo />
            <p className="text-gray-400 mt-4 leading-relaxed max-w-md">
              Especializados em desenvolvimento web com foco na experiência do usuário. 
              Landing pages por R$ 30 e projetos personalizados de alta qualidade com automação.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Atom, Code, Brain, Zap].map((Icon, index) => (
                <div
                  key={index}
                  className="p-2 bg-red-700/20 rounded-lg hover:bg-red-700/40 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-red-700" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Landing Pages R$ 30',
                'Desenvolvimento Web',
                'Integração com IA',
                'Dashboards Interativos',
                'UX/UI Design'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-700 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {[
                'Portfólio',
                'Documentação',
                'Tutoriais',
                'Casos de Estudo',
                'Preços',
                'Suporte'
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-700 transition-colors duration-300"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Aithos Tech. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacidade', 'Termos de Uso', 'Cookies', 'Contato'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-red-700 text-sm transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="border-red-900/20 border-r border-b"
              style={{ animationDelay: `${i * 0.02}s` }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};