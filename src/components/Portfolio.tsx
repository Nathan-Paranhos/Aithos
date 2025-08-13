import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'ApiREST Grifo',
      description: 'Api para comunicação entre sistemas com autenticação segura e endpoints RESTful.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      category: 'Vistorias imobiliarias',
      tech: ['Node.js', 'Express', 'PostgreSQL'],
      status: 'Completed',
      link: 'https://grifo-api.onrender.com/',
    },
    {
      title: 'Portal Imobiliário',
      description: 'Plataforma completa para imobiliária com busca avançada e sistema de leads.',
      image: 'https://images.pexels.com/photos/33411897/pexels-photo-33411897.jpeg',
      category: 'Imobiliário',
      tech: ['Next.js', 'PostgreSQL', 'Maps API', 'CRM'],
      status: 'Completed',
     link: 'https://nathan-paranhos.vercel.app/login',
      demo: 'https://github.com/Nathan-Paranhos/imob-virtual'
    },
    {
      title: 'Dashboard Financeiro',
      description: 'Painel interativo para gestão financeira com gráficos em tempo real e relatórios.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      category: 'Fintech',
      tech: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      status: 'Completed',
      link: 'https://seudominio.com/dashboard-financeiro',
      demo: 'https://demo.seudominio.com/dashboard-financeiro'
    },
    {
      title: 'RPA para automações',
      description: 'Aplicativo de delivery com chatbot inteligente e recomendações personalizadas.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Food Tech',
      tech: ['React Native', 'AI/ML', 'Firebase', 'Chatbot'],
      status: 'In Development',
      link: 'https://seudominio.com/app-delivery-ia'
    },
    {
      title: 'Landing Page',
      description: 'Landing page para software B2B com formulários inteligentes e automação de leads.',
      image: 'https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg',
      category: 'SaaS',
      tech: ['Next.js', 'TypeScript', 'Automation', 'CRM'],
      status: 'Completed',
      link: 'https://sobralcreditoseguro.com.br/',

    },
    {
      title: 'Vorax Core',
      description: 'Plataforma web inteligente para manutenção preditiva de equipamentos industriais, agrícolas e automotivos, desenvolvida pela Aithos Tech. ',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      category: 'EdTech',
      tech: ['React', 'Video API', 'Progress Tracking', 'LMS'],
      status: 'In Development',
      link: 'https://seudominio.com/portal-educacional',
      demo: 'https://demo.seudominio.com/dashboard-financeiro'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 border-green-400';
      case 'In Development': return 'text-yellow-400 border-yellow-400';
      case 'Research Phase': return 'text-blue-400 border-blue-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <section className="relative py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-red-700">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exemplos de landing pages e projetos web que criamos para nossos clientes, 
            sempre focando em conversão e experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-red-800/20 hover:border-red-800/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-800/20"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-red-800/0 group-hover:bg-red-800/10 transition-colors duration-500" />
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-red-400 text-sm font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-red-800/20 text-red-300 text-xs rounded border border-red-800/30 group-hover:bg-red-800/30 group-hover:text-red-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-800 hover:text-red-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Ver Mais</span>
                  </a>
                  {project.status === 'Completed' && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Play size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://seudominio.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-800/50 hover:scale-105 inline-block"
          >
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
};
