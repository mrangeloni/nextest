import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Globe, Zap } from 'lucide-react';
import ChatAnimation from './ChatAnimation';

export default function Hero() {
  const heroRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['WhatsApp', 'Instagram', 'TikTok', 'Facebook'];
  
  const wordGradients = {
    'WhatsApp': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    'Instagram': 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
    'TikTok': 'linear-gradient(135deg, #25F4EE 0%, #FE2C55 100%)',
    'Facebook': 'linear-gradient(135deg, #1877F2 0%, #0C63D4 100%)'
  };
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterWord = 1500;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        // Palavra completa, aguardar antes de deletar
        setTimeout(() => setIsDeleting(true), pauseAfterWord);
      } else if (isDeleting && displayedText === '') {
        // Palavra deletada, ir para próxima
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        // Deletando letra
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      } else {
        // Adicionando letra
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F8FAFF 0%, #EEF2FF 50%, #E8EDFF 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-full px-4 py-2 shadow-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-[#4A4A68]">Para quem deseja vender 24h</span>
          </div>
        </div>

        {/* Headline */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#1E1B4B]">IA Personalizada que Funciona 24/7 e escala suas vendas no </span>
            <span className="inline-block">
              <span 
                className="typing-text gradient-text" 
                style={{ 
                  backgroundImage: wordGradients[words[currentWordIndex]],
                  backgroundSize: '200% 200%',
                }}
              >
                {displayedText}
                <span 
                  className="typing-cursor gradient-text"
                  style={{ 
                    backgroundImage: wordGradients[words[currentWordIndex]],
                    backgroundSize: '200% 200%',
                  }}
                >
                  |
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-center max-w-2xl mx-auto mb-8">
          <p className="text-[#4A4A68] text-lg leading-relaxed">
            Mais de 3.800 e-commerces brasileiros já automatizaram suas vendas com Nextags. Nossa infraestrutura de IA aprende com seu negócio, responde como seu melhor vendedor e escala sem limite.
          </p>
        </div>

        {/* CTA Button */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 flex justify-center mb-10">
          <button
            onClick={scrollToBooking}
            className="flex items-center gap-2 bg-[#5B5FFB] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#4A4EE8] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            COMEÇAR
          </button>
        </div>

        {/* Features Strip */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          <div className="flex items-center gap-2 text-[#4A4A68]">
            <Calendar className="w-5 h-5 text-[#5B5FFB]" />
            <span className="text-sm">Aumente seu LTV</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A4A68]">
            <Globe className="w-5 h-5 text-[#5B5FFB]" />
            <span className="text-sm">Construído Sob Medida para Seu Negócio</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A4A68]">
            <Zap className="w-5 h-5 text-[#5B5FFB]" />
            <span className="text-sm">Venda Mais com Upsell Automático</span>
          </div>
        </div>

        {/* Chat Animation */}
        <div className="reveal opacity-0 transition-all duration-700 delay-500 animate-phone-in px-4 md:px-0">
          <ChatAnimation />
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Efeito de digitação */
        .typing-text {
          display: inline-block;
          min-width: 280px;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .typing-text {
            min-width: 240px;
          }
        }
        
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}