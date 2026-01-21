import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://nextags.com.br/wp-content/uploads/2024/01/LOGO-NEXTAGS.svg" 
              alt="Nextags Logo" 
              className="h-8"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-sm text-[#4A4A68] hover:text-[#1E1B4B] transition-colors"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm text-[#4A4A68] hover:text-[#1E1B4B] transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('agents')}
              className="text-sm text-[#4A4A68] hover:text-[#1E1B4B] transition-colors"
            >
              Agentes
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-sm text-[#4A4A68] hover:text-[#1E1B4B] transition-colors"
            >
              Perguntas Frequentes
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href="https://app.nextagsai.com.br/en/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#5B5FFB] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4A4EE8] transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Entrar
          </a>
        </div>
      </div>
    </header>
  );
}