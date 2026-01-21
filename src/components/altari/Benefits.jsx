import React, { useEffect, useRef } from 'react';
import { Settings, Code, Link, BarChart3 } from 'lucide-react';

export default function Benefits() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-[#F8FAFF] border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Benefícios
          </span>
        </div>

        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1E1B4B]">O que você recebe com </span>
            <span className="text-[#5B5FFB]">Nextags</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-xl mx-auto mb-16">
          <p className="text-[#6B7280]">
            Não vendemos templates limitados. Com nextags você cria automações de IA totalmente 
personalizadas para seu e-commerce, do seu jeito, sem precisar de desenvolvedor.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Custom-Built For You */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4 text-center">
                Construa Sem Código
              </h3>
              
              {/* Visual Mock */}
              <div className="bg-[#F8FAFF] rounded-xl p-4 mb-4">
                <div className="space-y-3">
                  {['Drag & Drop Visual', 'Templates Prontos', 'Customização Total'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-[#5B5FFB] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#5B5FFB] rounded-full" />
                      </div>
                      <div className="bg-white rounded-lg px-4 py-2 border border-[#E2E8F0] text-sm text-[#4A4A68]">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#6B7280] text-sm text-center">
                Cada sistema é projetado do zero para corresponder aos seus
                fluxos de trabalho e objetivos.
              </p>
            </div>
          </div>

          {/* Complete Ownership */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4 text-center">
                Plataforma Sem Limites
              </h3>
              
              {/* Code Mock */}
              <div className="bg-[#1E1B4B] rounded-xl p-4 mb-4 font-mono text-xs">
                <div className="pl-4 text-gray-400">
                  <div>Mensagens: Sem teto</div>
                  <div>Dados: 100% seus</div>
                  <div>Export: Quando quiser</div>
                  <div>APIs Oficiais</div>
                </div>
                <div className="text-[#5B5FFB]">{'}'}</div>
              </div>

              <p className="text-[#6B7280] text-sm text-center">
                Você é dono dos agentes, dados e infraestrutura - sem
                assinaturas ocultas ou aprisionamento.
              </p>
            </div>
          </div>

          {/* Fully Integrated */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4 text-center">
                Totalmente Integrado
              </h3>
              
              {/* Integration Visual */}
              <div className="bg-[#F8FAFF] rounded-xl p-4 mb-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl border border-[#E2E8F0] flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#5B5FFB] to-[#8B5CF6] rounded" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="h-0.5 w-8 bg-[#5B5FFB]" />
                    <div className="h-0.5 w-8 bg-[#5B5FFB]" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-white rounded-lg border border-[#E2E8F0] flex items-center justify-center">
                      <Link className="w-5 h-5 text-[#5B5FFB]" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-lg border border-[#E2E8F0] flex items-center justify-center">
                      <Settings className="w-5 h-5 text-[#5B5FFB]" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#6B7280] text-sm text-center">
                Conectamos diretamente com seu CRM, dados e pilha de
                comunicação.
              </p>
            </div>
          </div>

          {/* Proven Results */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-4 text-center">
                Resultados Comprovados
              </h3>
              
              {/* Results Visual */}
              <div className="bg-[#1E1B4B] rounded-xl p-4 mb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#5B5FFB]/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Contacts Added</p>
                    <p className="text-xl font-bold text-white">534</p>
                  </div>
                  <div className="bg-[#5B5FFB]/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Pipeline Opp.</p>
                    <p className="text-xl font-bold text-white">3.4x</p>
                  </div>
                  <div className="bg-[#5B5FFB]/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Activity Logged</p>
                    <p className="text-xl font-bold text-white">24/24</p>
                  </div>
                  <div className="bg-[#5B5FFB]/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Missed Updates</p>
                    <p className="text-xl font-bold text-white">0</p>
                  </div>
                </div>
              </div>

              <p className="text-[#6B7280] text-sm text-center">
                Nossas construções geram leads qualificados, economizam horas e escalam
                operações rapidamente.
              </p>
            </div>
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