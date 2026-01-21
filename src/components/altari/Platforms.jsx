import React, { useEffect, useRef } from 'react';

export default function Platforms() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
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

  const platforms = [
    { name: 'Meta', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/042316ea2_65c5bf5fab932041d3e51b0f_65246611fc95ab28fba37295_Meta_Business_Partners_two_line_lockup_mono_white_RGB-p-500.png' },
    { name: 'OpenAI', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/0fd6a8554_65e2a90332dacedc3625c641_openai-white-lockup-p-500.png' },
    { name: 'Claude', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/91e005a37_Claude_AI_logosvg.png' },
    { name: 'DeepSeek', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/0384a7ce3_DeepSeek_logosvg.png' },
    { name: 'Gemini', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/8378f3660_Google_Gemini_logosvg.png' },
  ];

  return (
    <section className="py-16 bg-[#F8FAFF]">
      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
      >
        <p className="text-center text-sm text-[#6B7280] mb-10">
          Mais de 3.800 empresas automatizando vendas. Mais de R$ 1 Bilhão gerado em vendas com automações.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={platform.url} 
                alt={platform.name}
                className="h-8 w-auto object-contain"
                style={{
                  filter: 'brightness(0) saturate(100%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}