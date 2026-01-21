import React, { useEffect, useRef, useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

export default function Booking() {
  const sectionRef = useRef(null);
  const [contactsIndex, setContactsIndex] = useState(0);

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

  // Tabela de preços baseada no PDF fornecido
  const pricingTable = [
    { contacts: 2500, price: 147, perThousand: 58.80 },
    { contacts: 5000, price: 267, perThousand: 53.40 },
    { contacts: 10000, price: 397, perThousand: 39.70 },
    { contacts: 15000, price: 497, perThousand: 33.13 },
    { contacts: 20000, price: 597, perThousand: 29.85 },
    { contacts: 30000, price: 747, perThousand: 24.90 },
    { contacts: 40000, price: 897, perThousand: 22.43 },
    { contacts: 50000, price: 997, perThousand: 19.94 },
    { contacts: 60000, price: 1147, perThousand: 19.12 },
    { contacts: 70000, price: 1297, perThousand: 18.53 },
    { contacts: 80000, price: 1447, perThousand: 18.09 },
    { contacts: 90000, price: 1597, perThousand: 17.74 },
    { contacts: 100000, price: 1747, perThousand: 17.47 },
    { contacts: 150000, price: 2497, perThousand: 16.65 },
    { contacts: 200000, price: 3139.86, perThousand: 15.70 },
    { contacts: 250000, price: 3782.71, perThousand: 15.13 },
    { contacts: 300000, price: 4425.57, perThousand: 14.75 },
    { contacts: 350000, price: 5068.43, perThousand: 14.48 },
    { contacts: 400000, price: 5711.29, perThousand: 14.28 },
    { contacts: 450000, price: 6354.14, perThousand: 14.12 },
    { contacts: 500000, price: 6997, perThousand: 13.99 }
  ];

  const currentPricing = pricingTable[contactsIndex];

  const features = [
    'WhatsApp Business API integrado',
    'Automação com IA personalizada',
    'Respostas instantâneas 24/7',
    'Integração com e-commerce',
    'Catálogo de produtos dinâmico',
    'Métricas e relatórios em tempo real',
    'Webhooks e API ilimitados',
    'Suporte prioritário 24/7',
    'Múltiplos agentes de IA simultâneos',
    'Upsell e cross-sell automático',
    'Recuperação de carrinho abandonado',
    'Segmentação avançada de clientes',
    'Análises preditivas com IA',
    'A/B Testing de conversas',
    'Automações complexas e fluxos customizados'
  ];

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #F8FAFF 0%, #EEF2FF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B]">
            Escolha o plano ideal para seu negócio
          </h2>
        </div>

        {/* Subtitle */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#6B7280]">
            Todas as funcionalidades incluídas desde o primeiro plano. Ajuste de acordo com seu volume de contatos.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            
            {/* Main Pricing Card with Slider */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden relative shadow-lg">
              <div className="p-8">
                {/* Title */}
                <h3 className="text-3xl font-bold text-[#1E1B4B] mb-3">Standard</h3>
                <p className="text-[#6B7280] text-sm mb-8">
                  Automatize suas vendas no WhatsApp com IA personalizada
                </p>

                {/* Price */}
                {currentPricing.contacts >= 500000 ? (
                  <>
                    <div className="mb-4">
                      <span className="text-6xl font-bold text-[#1E1B4B]">
                        Personalizado
                      </span>
                    </div>
                    <p className="text-[#6B7280] text-sm mb-8">Entre em contato para uma proposta sob medida</p>
                  </>
                ) : (
                  <>
                    <div className="mb-2">
                      <span className="text-[#6B7280] text-sm">Começa em</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-6xl font-bold text-[#1E1B4B]">
                        R${currentPricing.price.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                      <span className="text-[#6B7280] text-xl">/mês</span>
                    </div>
                    <p className="text-[#6B7280] text-sm mb-8">Cancele quando quiser</p>
                  </>
                )}

                {/* CTA Button */}
                <button className="w-full py-3 border-2 border-[#2663EB] text-[#2663EB] rounded-xl font-semibold hover:bg-[#2663EB] hover:text-white transition-all duration-300 mb-8">
                  {currentPricing.contacts >= 500000 ? 'Falar com Especialista' : 'Começar Agora'}
                </button>

                {/* Slider Section */}
                <div className="mb-8 pb-8 border-b border-[#E2E8F0]">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-medium text-[#6B7280]">Número de Contatos</label>
                    <div className="text-2xl font-bold text-[#1E1B4B]">
                      {currentPricing.contacts.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="relative px-2 mb-4">
                    <Slider
                      value={[contactsIndex]}
                      onValueChange={(value) => setContactsIndex(value[0])}
                      max={pricingTable.length - 1}
                      step={1}
                      className="w-full"
                    />
                    
                    {/* Scale markers */}
                    <div className="flex justify-between mt-3 text-xs text-[#6B7280] font-medium">
                      <span>2.5K</span>
                      <span>50K</span>
                      <span>100K</span>
                      <span>250K</span>
                      <span>500K</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {features.slice(0, 8).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2663EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-[#4A4A68] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="bg-[#1E293B] rounded-3xl border-2 border-[#2663EB] overflow-hidden relative shadow-lg">
              {/* Popular Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-block bg-gradient-to-r from-[#2663EB] to-[#1E4FD8] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Popular
                </span>
              </div>

              <div className="p-8">
                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-3">Enterprise</h3>
                <p className="text-gray-400 text-sm mb-8">
                  Para operações de grande escala com suporte dedicado
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-6xl font-bold text-white">
                    Personalizado
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-8">Entre em contato para uma proposta sob medida</p>

                {/* CTA Button */}
                <button className="w-full py-3 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 mb-8">
                  Falar com Especialista
                </button>

                {/* Info */}
                <div className="mb-8 pb-8 border-b border-[#334155]">
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-medium">+500.000 contatos</span> • Infraestrutura dedicada
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {[
                    'Tudo do plano Standard incluído',
                    'Volume ilimitado de contatos',
                    'Infraestrutura dedicada',
                    'Onboarding completo',
                    'Integrações customizadas',
                    'Consultoria estratégica',
                    'SLA personalizado',
                    'Suporte dedicado 24/7'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2663EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
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