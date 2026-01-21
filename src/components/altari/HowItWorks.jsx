import React, { useEffect, useRef } from 'react';
import { Link2, Workflow, Bot, Rocket } from 'lucide-react';

export default function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      icon: Link2,
      title: 'Conecte seus canais',
      description: 'Conecte WhatsApp, Instagram, Messenger e outros canais em poucos cliques. Tudo integrado em uma única plataforma para centralizar suas conversas.',
    },
    {
      number: '02',
      icon: Workflow,
      title: 'Crie seus fluxos',
      description: 'Monte automações visuais para captar leads, responder clientes e qualificar contatos. Use gatilhos, palavras-chave e lógica inteligente — sem precisar programar.',
    },
    {
      number: '03',
      icon: Bot,
      title: 'Automatize com IA',
      description: 'Ative respostas automáticas com IA para vender, atender e escalar conversas 24/7. A IA entende o contexto, responde naturalmente e direciona para o próximo passo.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Publique e acompanhe',
      description: 'Coloque seus fluxos no ar e acompanhe resultados em tempo real. Veja métricas, otimize mensagens e aumente conversões continuamente.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-[#F8FAFF] border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Como funciona
          </span>
        </div>

        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1E1B4B]">Começar é </span>
            <span className="text-[#5B5FFB]">fácil</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-xl mx-auto mb-16">
          <p className="text-[#6B7280]">
            
Crie automações inteligentes para WhatsApp, Instagram e outros canais em poucos passos.
Sem código, sem complexidade — apenas fluxos que convertem conversas em vendas e atendimento eficiente.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full relative">
                {/* Step Number */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-[#5B5FFB] bg-[#5B5FFB]/10 px-2 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#5B5FFB] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1E1B4B] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
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
            Começar agora
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