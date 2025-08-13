import React from 'react';
import { Brain, Atom, Code, Cog, Zap, Bot } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      Icon: Code,
      title: 'Landing Pages Automatizadas',
      description: 'Criação rápida e profissional de landing pages por apenas R$ 30, com hospedagem incluída e atendimento automatizado.',
      features: ['R$ 30 fixo', 'Hospedagem incluída', 'Entrega em 24h', 'Atendimento automatizado']
    },
    {
      Icon: Brain,
      title: 'Desenvolvimento Web',
      description: 'Sites, portais e plataformas personalizadas com design exclusivo e funcionalidades avançadas.',
      features: ['Design personalizado', 'Responsivo', 'SEO otimizado', 'Performance']
    },
    {
      Icon: Zap,
      title: 'Integração com IA',
      description: 'Automações inteligentes, chatbots e sistemas que aprendem com seus usuários para melhorar a experiência.',
      features: ['Chatbots', 'Automação', 'Machine Learning', 'APIs inteligentes']
    },
    {
      Icon: Cog,
      title: 'Dashboards Interativos',
      description: 'Painéis de controle personalizados para visualização de dados e métricas do seu negócio em tempo real.',
      features: ['Visualização de dados', 'Tempo real', 'Métricas customizadas', 'Relatórios']
    },
    {
      Icon: Bot,
      title: 'Fluxos de Automatização',
      description: 'Fluxos de trabalho automatizados para otimizar processos e aumentar a eficiência operacional.',
      features: ['Otimização de tempo', 'Analytics', 'Conversão de dados']
    },
    {
      Icon: Atom,
      title: 'UX/UI Design',
      description: 'Identidade visual completa e experiência do usuário focada em resultados e engajamento.',
      features: ['Design System', 'Prototipagem', 'User Research', 'Interface Design']
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas em desenvolvimento web, desde landing pages automatizadas 
            até projetos personalizados com IA e automações inteligentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description, features }) => (
            <div
              key={title}
              className="group bg-black border border-red-700/40 hover:border-red-600 transition-all duration-500 p-8 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-red-700/30"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-700/30 rounded-lg group-hover:bg-red-600/40 transition-all duration-300">
                  <Icon className="w-8 h-8 text-red-600 group-hover:text-red-500 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white ml-4 group-hover:text-red-200 transition-colors duration-300">
                  {title}
                </h3>
              </div>
              
              <p className="text-gray-400 text-base mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-red-700/20 text-red-300 text-sm rounded-full border border-red-700/40 group-hover:bg-red-600/30 group-hover:text-red-200 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
