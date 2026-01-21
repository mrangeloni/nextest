import React, { useEffect, useRef } from 'react';

export default function WhyAltari() {
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

  return (
    <section
      ref={sectionRef}
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #F8FAFF 0%, #EEF2FF 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-white border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Parceiro de Crescimento com IA
          </span>
        </div>

        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1E1B4B]">Por que as principais empresas escolhem </span>
            <span className="text-[#5B5FFB]">Nextags</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#6B7280] text-lg">
            Mais do que automação de mensagens, a Nextags ajuda negócios a transformar conversas em vendas, leads e atendimento escalável — tudo em um só lugar.
Construída por especialistas em crescimento, marketing conversacional e automação, a Nextags foi criada para resolver problemas reais de quem precisa escalar conversas sem perder performance.
          </p>
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