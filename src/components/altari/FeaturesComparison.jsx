import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export default function FeaturesComparison() {
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

  const sections = [
    {
      title: 'WhatsApp features',
      features: [
        { name: 'WhatsApp Business API', value: true },
        { name: 'Linhas de WhatsApp', value: '1 por plano' },
        { name: 'Mensagens de saída', value: 'Ilimitadas' },
        { name: 'Limite de contatos', value: '2.500 - +500k' },
        { name: 'Inbox compartilhado', value: true },
        { name: 'Mensagens broadcast', value: true },
        { name: 'Fluxos de automação', value: true },
        { name: 'Fluxos conectados', value: true },
        { name: 'Etapas avançadas de fluxo', value: true },
        { name: 'Atribuição de equipe', value: true },
        { name: 'Catálogo de produtos', value: true },
        { name: 'Pontuação de contatos', value: true },
        { name: 'Single sign-on (SSO)', value: true }
      ]
    },
    {
      title: 'Instagram features',
      features: [
        { name: 'Instagram Direct Messages', value: true },
        { name: 'Respostas automáticas', value: true },
        { name: 'Stories e posts automatizados', value: true },
        { name: 'Inbox unificado', value: true },
        { name: 'Comentários automatizados', value: true },
        { name: 'DM em massa', value: true },
        { name: 'Fluxos de conversa', value: true },
        { name: 'Tags e segmentação', value: true }
      ]
    },
    {
      title: 'TikTok features',
      features: [
        { name: 'TikTok Direct Messages', value: true },
        { name: 'Respostas automáticas', value: true },
        { name: 'Inbox integrado', value: true },
        { name: 'Comentários automatizados', value: true },
        { name: 'Fluxos de conversa', value: true },
        { name: 'Integração com loja', value: true }
      ]
    },
    {
      title: 'Messenger features',
      features: [
        { name: 'Facebook Messenger', value: true },
        { name: 'Respostas automáticas', value: true },
        { name: 'Broadcast de mensagens', value: true },
        { name: 'Inbox unificado', value: true },
        { name: 'Fluxos de automação', value: true },
        { name: 'Integração Facebook Ads', value: true }
      ]
    },
    {
      title: 'Inteligência Artificial',
      features: [
        { name: 'IA personalizada', value: true },
        { name: 'Múltiplos agentes de IA', value: true },
        { name: 'Aprendizado contínuo', value: true },
        { name: 'NLP avançado', value: true },
        { name: 'Análises preditivas', value: true },
        { name: 'Recomendações inteligentes', value: true }
      ]
    },
    {
      title: 'E-commerce & Integrações',
      features: [
        { name: 'Shopify', value: true },
        { name: 'WooCommerce', value: true },
        { name: 'VTEX', value: true },
        { name: 'Webhooks ilimitados', value: true },
        { name: 'API REST completa', value: true },
        { name: 'Zapier e Make', value: true },
        { name: 'Google Sheets', value: true }
      ]
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-50 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div
        ref={sectionRef}
        className="opacity-0 translate-y-8 transition-all duration-700 max-w-6xl mx-auto px-6 relative"
      >
        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm text-blue-600 font-medium">Plataforma Completa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recursos da Plataforma
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todos os recursos incluídos em todos os planos. Sem limitações de funcionalidades.
          </p>
        </div>

        {/* Features Tables */}
        <div className="space-y-20">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="max-w-4xl mx-auto">
              {/* Section Title */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </div>

              {/* Features Table */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <table className="w-full">
                  <tbody>
                    {section.features.map((feature, featureIdx) => (
                      <tr
                        key={featureIdx}
                        className={`hover:bg-gray-50/50 transition-all duration-200 ${
                          featureIdx !== section.features.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <td className="px-8 py-5">
                          <span className="text-base text-gray-700 font-normal">{feature.name}</span>
                        </td>
                        <td className="px-8 py-5 text-right min-w-[180px]">
                          {typeof feature.value === 'boolean' ? (
                            <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50">
                              <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-base text-gray-900 font-semibold">{feature.value}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Planos e Preços
          </button>
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