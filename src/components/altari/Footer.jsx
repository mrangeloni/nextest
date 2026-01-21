import React from 'react';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Instagram', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'Messenger', href: '#' },
      { label: 'IA Nextags', href: '#' },
      { label: 'Marketing por SMS', href: '#' },
      { label: 'Para e-Commerce', href: '#' },
      { label: 'Integrações', href: '#' },
      { label: 'Preços', href: '#' },
    ],
    company: [
      { label: 'Sobre', href: '#' },
      { label: 'Manifesto', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Imprensa', href: '#' },
      { label: 'Privacidade e Segurança', href: '#' },
    ],
    partners: [
      { label: 'Nextags para Agências', href: '#' },
      { label: 'Contratar uma Agência', href: '#' },
      { label: 'Programa de Afiliados', href: '#' },
    ],
    resources: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Comunidade', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Sempre Online', href: '#' },
      { label: 'Como Fazer', href: '#' },
      { label: 'Curso em Vídeo', href: '#' },
      { label: 'Exemplos de Chatbot', href: '#' },
    ],
    other: [
      { label: 'Página de Status', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Configurações de Privacidade', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Serviço', href: '#' },
    ],
  };

  return (
    <footer
      className="py-16"
      style={{
        background: 'linear-gradient(180deg, #EEF2FF 0%, #E8EDFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-[#1E1B4B] font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#6B7280] text-sm hover:text-[#5B5FFB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1E1B4B] font-semibold mb-4">Nextags</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#6B7280] text-sm hover:text-[#5B5FFB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-[#1E1B4B] font-semibold mb-4">Parceiros</h3>
            <ul className="space-y-2">
              {footerLinks.partners.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#6B7280] text-sm hover:text-[#5B5FFB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#1E1B4B] font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#6B7280] text-sm hover:text-[#5B5FFB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="text-[#1E1B4B] font-semibold mb-4">Outros</h3>
            <ul className="space-y-2">
              {footerLinks.other.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#6B7280] text-sm hover:text-[#5B5FFB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex justify-end">
            <img 
              src="https://nextags.com.br/wp-content/uploads/2024/01/LOGO-NEXTAGS.svg" 
              alt="Nextags Logo" 
              className="h-8"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/nextags"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#5B5FFB] hover:border-[#5B5FFB] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/nextags"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#5B5FFB] hover:border-[#5B5FFB] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@nextags"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#5B5FFB] hover:border-[#5B5FFB] transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/nextags"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#6B7280] hover:text-[#5B5FFB] hover:border-[#5B5FFB] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Links */}
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            <span>© 2026 Nextags AI</span>
            <a href="#" className="hover:text-[#5B5FFB] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#5B5FFB] transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}