import React, { useEffect, useRef } from 'react';

export default function MetricsStrip() {
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

  const metrics = [
    { value: 'R$ 1Bi+', label: 'De Receita Gerada' },
    { value: '680% ROI', label: 'Médio nos Primeiros 90 Dias' },
    { value: '3.5X', label: 'ROI Médio nos Primeiros 60 Dias' },
    { value: '30 Dias', label: 'Tempo médio até a implementação' },
  ];

  return (
    <section className="py-16 bg-white">
      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="bg-[#F8FAFF] rounded-2xl border border-[#E2E8F0] p-8">
          <p className="text-center text-sm text-[#6B7280] mb-8">
            O Que Você Pode Esperar com Nextags
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#1E1B4B] mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-[#6B7280]">{metric.label}</p>
              </div>
            ))}
          </div>
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