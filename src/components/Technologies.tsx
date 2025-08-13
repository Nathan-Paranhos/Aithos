import React from 'react';
import { Calendar, Code, Zap, Brain, Atom, Cog } from 'lucide-react';

export const Technologies: React.FC = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Primeiros Projetos Web',
      description: 'Início das atividades focadas em desenvolvimento web e criação de sites institucionais.',
      icon: Calendar,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
    },
    {
      year: '2024',
      title: 'Era dos Frameworks',
      description: 'Adoção de frameworks modernos para desenvolvimento mais eficiente e escalável.',
      icon: Brain,
      technologies: ['React', 'Vue.js', 'Node.js', 'Bootstrap']
    },
    {
      year: '2025',
      title: 'Landing Pages Especializadas',
      description: 'Foco em landing pages de alta conversão e otimização para resultados.',
      icon: Atom,
      technologies: ['Next.js', 'Tailwind CSS', 'Analytics']
    },
    {
      year: '2025',
      title: 'Automação e IA',
      description: 'Integração de inteligência artificial e automações para melhorar a experiência.',
      icon: Cog,
      technologies: ['OpenAI API', 'Chatbots', 'Automation', 'Machine Learning']
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-black">
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
            Nossa <span className="text-red-700">Evolução</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Evolução constante em desenvolvimento web, sempre adotando as melhores práticas e tecnologias do mercado.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-red-800 via-red-600 to-red-800"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={item.year}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-red-700 rounded-full border-4 border-black flex items-center justify-center z-10 shadow-lg">
                  <Icon className="w-4 h-4 text-white" />
                </div>

                <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl border border-red-700/30 hover:border-red-700/60 transition-all duration-300 hover:transform hover:scale-105 group shadow-xl">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl font-bold text-red-700 group-hover:text-red-600 transition-colors duration-300">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-red-700/20 text-red-300 text-xs rounded-full border border-red-700/30 group-hover:bg-red-700/30 group-hover:text-red-200 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Stack Tecnológico <span className="text-red-700">Atual</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python',
              'OpenAI API', 'Stripe', 'Firebase', 'Vercel', 'MongoDB', 'PostgreSQL',
              'Docker', 'AWS', 'Analytics', 'Automation', 'Figma', 'Git'
            ].map((tech) => (
              <div
                key={tech}
                className="bg-black/70 backdrop-blur-md p-4 rounded-xl border border-red-700/30 hover:border-red-700/60 transition-all duration-300 hover:transform hover:scale-105 text-center group relative overflow-hidden shadow-xl"
              >
                <span className="text-white font-medium group-hover:text-red-100 transition-colors duration-300 relative z-10">
                  {tech}
                </span>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:animate-[particle-rise_1.5s_ease-out_infinite] pointer-events-none"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 0.8}s`,
                      width: `${1 + Math.random() * 2}px`,
                      height: `${1 + Math.random() * 2}px`,
                      animationDuration: `${0.4 + Math.random() * 0.6}s`
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};