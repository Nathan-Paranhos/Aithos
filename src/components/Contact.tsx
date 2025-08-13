import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="relative py-20 px-4 bg-black">
      <style>{`
        @keyframes particle-rise {
          0% { transform: translateY(100%) scale(0.5); opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-300%) scale(1.5); opacity: 0; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-red-700">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para criar sua landing page por R$ 30? Ou precisa de um projeto personalizado? Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              {[
                { Icon: Mail, title: 'E-mail', info: 'paranhoscontato.n@gmail.com', link: 'mailto:paranhoscontato.n@gmail.com' },
                { Icon: Phone, title: 'WhatsApp', info: '+55 11 99696-1151', link: 'https://wa.me/5511996961151' },
                { Icon: MapPin, title: 'Atendimento', info: '100% Online', link: '#' }
              ].map(({ Icon, title, info, link }) => (
                <a
                  key={title}
                  href={link}
                  className="flex items-center space-x-4 p-4 bg-black/70 backdrop-blur-md rounded-xl border border-red-700/30 hover:border-red-700/60 transition-all duration-300 hover:scale-105 group relative overflow-hidden shadow-xl"
                >
                  <div className="p-3 bg-red-700/20 rounded-lg group-hover:bg-red-700/40 transition-all duration-300">
                    <Icon className="w-6 h-6 text-red-700 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{title}</h4>
                    <p className="text-gray-300">{info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Só GitHub */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Nathan-Paranhos"
                  className="p-3 bg-red-700/20 rounded-lg hover:bg-red-700/40 transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                >
                  <Github className="w-5 h-5 text-red-700 group-hover:text-red-600 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-black/70 backdrop-blur-md p-8 rounded-xl border border-red-700/30 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${errors.name ? 'border-red-500' : 'border-red-700/30'} rounded-lg text-white`}
                  placeholder="Seu nome completo"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${errors.email ? 'border-red-500' : 'border-red-700/30'} rounded-lg text-white`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">Empresa (Opcional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-red-700/30 rounded-lg text-white"
                  placeholder="Nome da sua empresa"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${errors.message ? 'border-red-500' : 'border-red-700/30'} rounded-lg text-white resize-none`}
                  placeholder="Precisa de uma landing page por R$ 30 ou tem um projeto personalizado em mente?"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Botão */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-700 hover:bg-red-600 disabled:bg-red-900 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
