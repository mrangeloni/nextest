import React, { useEffect, useRef } from 'react';

export default function TrustLogos() {
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

  const logos = [
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6bd5965c_ChatGPT-Image-19-de-ago-de-2025-17_02_35.jpeg', alt: 'La Ganexa' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/3562b9257_ChatGPT-Image-19-de-ago-de-2025-17_08_33.jpeg', alt: 'Loungerie' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/7be6c4423_ChatGPT-Image-19-de-ago-de-2025-17_16_36.jpeg', alt: 'Mais Laser' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/3afa01df8_ChatGPT-Image-19-de-ago-de-2025-17_39_41.jpeg', alt: 'Cicatribem' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/8cc7c25e8_ChatGPT-Image-19-de-ago-de-2025-17_43_06.jpeg', alt: 'Ela Decora' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/3b872f902_ChatGPT-Image-19-de-ago-de-2025-17_48_45.jpeg', alt: 'Ademicon' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b4a6752a1_ChatGPT-Image-19-de-ago-de-2025-17_51_03.jpeg', alt: 'Blue Man' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/97a5e6050_ChatGPT-Image-19-de-ago-de-2025-17_53_23.jpeg', alt: 'Bantu Joias' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/eaa5cdb6f_ChatGPT-Image-19-de-ago-de-2025-17_56_50.jpg', alt: 'Boca Rosa' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b317e3aa4_ChatGPT-Image-19-de-ago-de-2025-17_59_07.jpeg', alt: 'Swan Biquinis' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/fb51df396_ChatGPT-Image-19-de-ago-de-2025-18_02_03.jpg', alt: 'Francisca' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/e36b80d6f_ChatGPT-Image-19-de-ago-de-2025-18_05_07.jpg', alt: 'NASP' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/04b454398_ChatGPT-Image-19-de-ago-de-2025-18_22_22.jpeg', alt: 'Céu de Prata' },
    { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/1e6524c70_ChatGPT-Image-19-de-ago-de-2025-18_30_56.jpeg', alt: 'Biquíni da Thay' },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div
        ref={sectionRef}
        className="opacity-0 translate-y-8 transition-all duration-700"
      >
        <p className="text-center text-sm text-[#6B7280] mb-10">
          Marcas que Escolheram Vender Mais com IA
        </p>

        <div className="relative z-10">
                <div className="logo-scroll">
            <div className="logo-track">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="logo-item opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img 
                    src={logo.url} 
                    alt={logo.alt}
                    className="h-32 md:h-40 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .logo-scroll {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .logo-track {
          display: flex;
          gap: 0.75rem;
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        
        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 200px;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}