import React, { useState, useEffect } from 'react';
import { Phone, Video, Play, ChevronLeft, Bot } from 'lucide-react';

export default function ChatAnimation() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const conversation = [
    { 
      id: 0,
      sender: 'bot',
      delay: 400,
      typing: 800,
      type: 'typing'
    },
    { 
      id: 1, 
      text: 'Gostaria de ver leggings pretas para minha namorada', 
      sender: 'user', 
      delay: 1200
    },
    { 
      id: 2, 
      text: 'Perfeito! Vou te ajudar a encontrar a legging ideal. É para treino, uso casual ou presente especial?', 
      sender: 'bot', 
      delay: 1400,
      typing: 1000
    },
    { 
      id: 3, 
      text: 'Para treino, ela adora academia!', 
      sender: 'user', 
      delay: 1200 
    },
    { 
      id: 4, 
      text: 'Excelente! Qual o tamanho e estilo que ela prefere? Básica, com detalhes ou estampada?', 
      sender: 'bot', 
      delay: 1700,
      typing: 1100
    },
    { 
      id: 5, 
      text: 'Tamanho G, pode ser básica mesmo', 
      sender: 'user', 
      delay: 1200
    },
    { 
      id: 6, 
      text: 'Separei algumas leggings pretas perfeitas pra ela! Dá uma olhada:', 
      sender: 'bot', 
      delay: 1500,
      typing: 900,
      type: 'products'
    }
  ];

  useEffect(() => {
    if (currentStep >= conversation.length) {
      // Reset animation
      const resetTimer = setTimeout(() => {
            setMessages([]);
            setCurrentStep(0);
            setIsTyping(false);
          }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const currentMessage = conversation[currentStep];
    
    const timer = setTimeout(() => {
      if (currentMessage.type === 'typing') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, 500);
      } else if (currentMessage.sender === 'user') {
        setMessages(prev => [...prev, currentMessage]);
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 500);
      } else {
        setMessages(prev => [...prev, currentMessage]);
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 500);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 lg:px-8 mb-20 mobile-scale-container" style={{ minHeight: '650px' }}>
      
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-[15%] w-80 h-80 bg-gradient-to-br from-purple-200/60 to-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[20%] w-96 h-96 bg-gradient-to-br from-indigo-200/50 to-purple-200/30 rounded-full blur-3xl" />
      </div>

      {/* Animated Messages - Outside Phone (Desktop Only) */}
      {messages.map((message, index) => {
        const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
        if (isSmallScreen) return null;
        
        const messagePositions = [
          { top: '130px', left: '140px' },
          { top: '200px', right: '140px' },
          { top: '290px', left: '140px' },
          { top: '370px', right: '140px' },
          { top: '470px', left: '140px' },
          { top: '550px', right: '140px' }
        ];
        
        const pos = messagePositions[index] || messagePositions[0];
        const isBot = message.sender === 'bot';
        const prevMessage = index > 0 ? messages[index - 1] : null;
        const isSameSender = prevMessage && prevMessage.sender === message.sender;

        return (
          <div
            key={message.id}
            className="absolute z-30 animate-fade-in-up"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right
            }}
          >
            <div className={`flex items-start gap-2.5 ${isBot ? 'flex-row-reverse' : 'flex-row'}`}>
              {message.sender === 'user' && !isSameSender && (
                <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm flex-shrink-0 border-[2px] border-white ring-1 ring-black/5">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {message.sender === 'user' && isSameSender && (
                <div className="w-8 flex-shrink-0" />
              )}
              {message.sender === 'bot' && !isSameSender && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-sm flex-shrink-0 border-[2px] border-white ring-1 ring-black/5 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              {message.sender === 'bot' && isSameSender && (
                <div className="w-8 flex-shrink-0" />
              )}
              <div className="flex flex-col" style={{ maxWidth: message.type === 'products' ? '85%' : '70%' }}>
                <div
                  className={`px-3.5 py-2.5 rounded-[18px] transition-all duration-200 ${
                    message.sender === 'user'
                      ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100/50'
                      : 'bg-gradient-to-br from-[#D9FDD3] to-[#D1F4CC] shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]'
                  }`}
                  style={{
                    borderRadius: message.sender === 'user' 
                      ? '18px 18px 18px 5px'
                      : '18px 18px 5px 18px'
                  }}
                >
                  {message.type === 'products' ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-[14.5px] text-gray-900 leading-[1.4] font-normal tracking-tight mb-1">
                        {message.text}
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        <div className="flex-shrink-0 w-40 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                          <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/1e65b6f1e_image.png" 
                            alt="Legging Fitness" 
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-2">
                            <p className="text-xs font-medium text-gray-900 line-clamp-2">Legging Fitness Glow Preta</p>
                            <button className="mt-1.5 w-full text-xs text-green-600 font-medium py-1.5 border border-green-600 rounded-md hover:bg-green-50 transition-colors">
                              Ver Produto
                            </button>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-40 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                          <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/61bee818e_image.png" 
                            alt="Calça Legging" 
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-2">
                            <p className="text-xs font-medium text-gray-900 line-clamp-2">Calça Legging Sport Pro</p>
                            <button className="mt-1.5 w-full text-xs text-green-600 font-medium py-1.5 border border-green-600 rounded-md hover:bg-green-50 transition-colors">
                              Ver Produto
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : message.type === 'audio' ? (
                    <div className="flex items-center gap-2.5 min-w-[170px]">
                      <button className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform">
                        <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                      </button>
                      <div className="flex-1 flex items-center gap-[2px] h-5">
                        {[...Array(24)].map((_, i) => (
                          <div
                            key={i}
                            className="w-[2px] bg-gray-700/80 rounded-full transition-all"
                            style={{
                              height: `${Math.random() * 14 + 6}px`
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-600 font-medium tabular-nums">{message.duration}</span>
                    </div>
                  ) : (
                    <p className="text-[14.5px] text-gray-900 leading-[1.4] font-normal tracking-tight">
                      {message.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Phone Frame */}
      <div 
        className="relative overflow-visible animate-float-subtle mx-auto w-full max-w-[360px]" 
        style={{ 
          aspectRatio: '9/19', 
          padding: '11px',
          background: 'linear-gradient(145deg, #1a1a1e 0%, #0a0a0f 50%, #000000 100%)',
          borderRadius: '3.25rem',
          boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.8)',
          transform: 'translateZ(0)'
        }}
      >
        {/* Glass Reflection */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20" style={{ borderRadius: '3rem 3rem 0 0' }} />
        
        {/* Screen */}
        <div className="relative rounded-[2.75rem] overflow-hidden h-full flex flex-col shadow-inner" style={{
          background: 'linear-gradient(180deg, #E8E4DF 0%, #EBE7E2 50%, #E6E2DD 100%)'
        }}>
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-gradient-to-b from-black to-gray-900 rounded-b-[22px] z-10 shadow-lg">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full" />
          </div>
          
          {/* WhatsApp Header */}
          <div className="bg-white/95 backdrop-blur-sm pt-10 pb-3 px-3.5 flex items-center gap-2.5 z-0 border-b border-gray-200/60 shadow-sm">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex-shrink-0 border-2 border-white shadow-sm ring-1 ring-black/5">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png" 
                alt="Gabriel" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-gray-900 font-semibold text-[15px] tracking-tight">Gabriel</div>
              <div className="text-gray-500 text-[12px]">Cliente</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                <Video className="w-5 h-5 text-gray-700" />
              </button>
              <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                <Phone className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 flex flex-col gap-2">
            {typeof window !== 'undefined' && window.innerWidth < 768 && messages.map((message, idx) => {
              const isBot = message.sender === 'bot';
              const prevMessage = messages[messages.indexOf(message) - 1];
              const isSameSender = prevMessage && prevMessage.sender === message.sender;

              return (
                <div key={message.id} className={`flex items-start gap-2 ${isBot ? 'flex-row-reverse' : 'flex-row'} animate-fade-in-up`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  {message.sender === 'user' && !isSameSender && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-white ring-1 ring-black/5">
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {message.sender === 'user' && isSameSender && <div className="w-6 flex-shrink-0" />}
                  {message.sender === 'bot' && !isSameSender && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 border border-white ring-1 ring-black/5 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {message.sender === 'bot' && isSameSender && <div className="w-6 flex-shrink-0" />}
                  <div className="flex flex-col" style={{ maxWidth: message.type === 'products' ? '80%' : '65%' }}>
                    <div
                      className={`px-2.5 py-1.5 rounded-[14px] text-xs transition-all duration-200 ${
                        message.sender === 'user'
                          ? 'bg-white shadow-sm border border-gray-100/50'
                          : 'bg-gradient-to-br from-[#D9FDD3] to-[#D1F4CC] shadow-sm'
                      }`}
                      style={{
                        borderRadius: message.sender === 'user' 
                          ? '14px 14px 14px 3px'
                          : '14px 14px 3px 14px'
                      }}
                    >
                      {message.type === 'products' ? (
                        <div className="flex flex-col gap-1">
                          <p className="text-[11px] text-gray-900 font-normal">{message.text}</p>
                          <div className="flex gap-1 overflow-x-auto pb-0.5">
                            <div className="flex-shrink-0 w-28 bg-white rounded-lg overflow-hidden shadow-xs border border-gray-100">
                              <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/1e65b6f1e_image.png" 
                                alt="Legging" 
                                className="w-full h-24 object-cover"
                              />
                              <div className="p-1">
                                <p className="text-[9px] font-medium text-gray-900 line-clamp-2">Legging Fitness</p>
                                <button className="mt-1 w-full text-[8px] text-green-600 font-medium py-1 border border-green-600 rounded">Ver</button>
                              </div>
                            </div>
                            <div className="flex-shrink-0 w-28 bg-white rounded-lg overflow-hidden shadow-xs border border-gray-100">
                              <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/61bee818e_image.png" 
                                alt="Calça" 
                                className="w-full h-24 object-cover"
                              />
                              <div className="p-1">
                                <p className="text-[9px] font-medium text-gray-900 line-clamp-2">Legging Sport</p>
                                <button className="mt-1 w-full text-[8px] text-green-600 font-medium py-1 border border-green-600 rounded">Ver</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-[11px] text-gray-900 font-normal">{message.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {isTyping && typeof window !== 'undefined' && window.innerWidth < 768 && (
              <div className="flex items-start gap-2 animate-fade-in-up">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-white ring-1 ring-black/5">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
                    alt="Gabriel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-3 py-2 bg-white shadow-sm border border-gray-100/50 rounded-[14px]">
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Input (static) */}
          <div className="bg-[#F5F5F5] px-3 py-2.5 flex items-center gap-2.5 border-t border-gray-200/50">
            <div className="flex-1 bg-white rounded-full px-4 py-2.5 shadow-sm border border-gray-200/40">
              <span className="text-[14px] text-gray-400">Mensagem</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shadow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-gradient-to-t from-gray-400/20 to-transparent blur-2xl rounded-full animate-pulse-soft" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        @keyframes floatSubtle {
          0%, 100% {
            transform: translateY(0) translateZ(0);
          }
          50% {
            transform: translateY(-4px) translateZ(0);
          }
        }

        .animate-float-subtle {
          animation: floatSubtle 4s ease-in-out infinite;
          will-change: transform;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #bbb;
          animation: whatsappTyping 2s infinite;
        }

        .typing-dot:nth-child(1) {
          animation-delay: 0s;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        @keyframes whatsappTyping {
          0%, 70%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          35% {
            opacity: 1;
            transform: translateY(-6px);
          }
        }

        @media (max-width: 768px) {
          .mobile-scale-container {
            transform: scale(0.85);
            transform-origin: top center;
          }
        }
      `}</style>
    </div>
  );
}