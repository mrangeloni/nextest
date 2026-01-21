import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, idx * 100);
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

  const faqs = [
    {
      question: 'Como a Nextags é diferente de um chatbot ou assistente virtual?',
      answer: 'A Nextags vai além de um chatbot tradicional. Ela é uma plataforma completa de automação conversacional, que permite criar fluxos inteligentes para vendas, atendimento e geração de leads — com IA, regras, integrações e controle total da jornada do cliente. Enquanto chatbots apenas respondem mensagens, a Nextags automatiza processos inteiros de conversa, do primeiro contato até a conversão.',
    },
    {
      question: 'Com quais canais e ferramentas a Nextags se conecta?',
      answer: 'A Nextags se conecta aos principais canais de mensagens, como WhatsApp, Instagram, Tiktok e Messenger, além de permitir integrações com ferramentas de CRM, e-commerce e outras plataformas essenciais para o seu negócio. Tudo funciona de forma centralizada, em um único painel.',
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim. A segurança dos seus dados é prioridade. Utilizamos boas práticas de segurança, criptografia e controle de acesso para proteger informações e garantir conformidade com padrões de mercado. Seus dados e os dados dos seus clientes permanecem sempre sob seu controle ',
    },
    {
      question: 'Preciso saber programar para usar a Nextags?',
      answer: 'Não. A Nextags foi criada para ser simples e intuitiva. Você cria automações e fluxos de conversa usando um construtor visual, sem precisar escrever código ou lidar com configurações técnicas complexas.',
    },
  ];

  return (
    <section
      id="faqs"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-6">
          <span className="inline-block bg-[#F8FAFF] border border-[#E2E8F0] rounded-full px-4 py-1.5 text-sm text-[#4A4A68]">
            Perguntas Frequentes
          </span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="bg-[#F8FAFF] rounded-xl border border-[#E2E8F0] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#EEF2FF] transition-colors"
                >
                  <span className="text-[#1E1B4B] font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B7280] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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