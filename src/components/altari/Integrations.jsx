import React, { useEffect, useRef } from 'react';

export default function Integrations() {
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

  const integrations = [
    { name: 'WhatsApp', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/3010599e8_d80df792101e31b0b88650fefb67622a.png' },
    { name: 'Shopify', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/3023bc97a_2945149.png' },
    { name: 'Nuvemshop', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/046388820_nuvemshop.png' },
    { name: 'n8n', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/9f6fdb952_n8n-color.png' },
    { name: 'Platform1', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/a6e981e42_cropped-favicon.png' },
    { name: 'Platform2', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/1647c4e44_unnamed2.png' },
    { name: 'Mercado Pago', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/9e1a0e736_mercado-pago-logo-png_seeklogo-342347.png' },
    { name: 'Platform3', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/869636c95_3007456.jpeg' },
  ];

  return (
    <section
      id="agents"
      ref={sectionRef}
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #F8FAFF 0%, #EEF2FF 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-white border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Integrações
          </span>
        </div>

        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1E1B4B]">Conecte Com Seu Negócio em </span>
            <span className="text-[#5B5FFB]">Poucos Cliques</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-xl mx-auto mb-16">
          <p className="text-[#6B7280]">
            API aberta e webhooks ilimitados para conectar qualquer sistema — de plataformas de e-commerce a ERPs customizados. Se tem API, Nextags conecta.
          </p>
        </div>

        {/* Integration Diagram */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg z-10 border-2 border-[#E2E8F0]">
              <img 
                src="https://nextags.com.br/wp-content/uploads/2024/01/LOGO-NEXTAGS.svg" 
                alt="Nextags Logo" 
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Orbit circle */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E2E8F0]" />

            {/* Integration Icons */}
            {integrations.map((integration, idx) => {
              const angle = (idx * 360) / integrations.length - 90;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={integration.name}
                  className="absolute w-14 h-14 bg-white rounded-xl border-2 border-[#E2E8F0] shadow-sm flex items-center justify-center hover:shadow-md hover:scale-110 transition-all duration-300 z-20"
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`,
                  }}
                >
                  <img 
                    src={integration.url} 
                    alt={integration.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              );
            })}

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {integrations.map((_, idx) => {
                const angle = (idx * 360) / integrations.length - 90;
                const innerRadius = 40;
                const outerRadius = 116;
                const x1 = 50 + (Math.cos((angle * Math.PI) / 180) * innerRadius * 100) / 192;
                const y1 = 50 + (Math.sin((angle * Math.PI) / 180) * innerRadius * 100) / 192;
                const x2 = 50 + (Math.cos((angle * Math.PI) / 180) * outerRadius * 100) / 192;
                const y2 = 50 + (Math.sin((angle * Math.PI) / 180) * outerRadius * 100) / 192;

                return (
                  <line
                    key={idx}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}
            </svg>
          </div>
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