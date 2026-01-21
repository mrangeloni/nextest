import React, { useEffect, useRef } from 'react';

export default function Team() {
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
        background: 'linear-gradient(180deg, #EEF2FF 0%, #F8FAFF 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-white border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Quem Somos
          </span>
        </div>

        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B]">
            Conheça a Nextags
          </h2>
        </div>

        {/* Description */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
           A Nextags nasceu da experiência prática de quem já operou marketing, vendas e atendimento em escala.
Antes da plataforma existir, nosso time já havia testado, implementado e otimizado automações conversacionais em diferentes negócios — entendendo na prática o que funciona (e o que não funciona).
Hoje, reunimos tudo isso em um SaaS simples, poderoso e pronto para escalar.
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