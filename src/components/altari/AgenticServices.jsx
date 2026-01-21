import React, { useEffect, useRef } from 'react';
import { Sparkles, Plug, BarChart3 } from 'lucide-react';

export default function AgenticServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, idx * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Sparkles,
      title: 'Automation Builder',
      description: 'Crie bots de vendas, FAQ automático e recuperação de carrinho — interface visual, sem linha de código, resultados em dias',
      gradient: 'from-[#5B5FFB] to-[#7C3AED]',
    },
    {
      icon: Plug,
      title: 'Integrações nativas',
      description: 'Integre com sua loja, CRM, ERP e ferramentas de pagamento — API aberta para customizações avançadas.',
      gradient: 'from-[#5B5FFB] to-[#6366F1]',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Funil de conversão, receita gerada, custo por aquisição — métricas que realmente importam para seu negócio',
      gradient: 'from-[#5B5FFB] to-[#8B5CF6]',
    },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-[#F8FAFF] border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Soluções
          </span>
        </div>

        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B]">
            Agentes de IA Mais Usados no E-commerce
          </h2>
        </div>

        {/* Subtitle */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#6B7280]">
            Construímos IA personalizada que automatiza atendimento, vendas e retenção — desde responder "onde está meu pedido?" até fechar vendas complexas no WhatsApp automaticamente.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center h-full">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center">
          <button
            onClick={scrollToBooking}
            className="flex items-center gap-2 bg-[#5B5FFB] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#4A4EE8] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Testar 7 Dias Grátis →
          </button>
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}