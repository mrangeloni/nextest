import React, { useEffect, useRef } from 'react';
import { Users, Clock, TrendingUp } from 'lucide-react';

export default function CustomerStories() {
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

  const testimonials = [
    {
      id: 1,
      name: "Cato B.",
      role: "Business Owner",
      title: "Amazing experience at Tidio",
      text: "I started using Tidio because I wanted to connect with for some time to grow use, and implement. The amazing using I love that you can would it is highly customizable.",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 2,
      name: "Khawer K.",
      role: "Deputy Director",
      title: "Excellent platform to interact with your customers",
      text: "Tidio is a completely automated platform and helps companies reach to very large time. The learn is it save a lot of time and we can communicate on other tasks",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 3,
      name: "Kristy W.",
      role: "Business Owner",
      title: "Great way to communicate with customers",
      text: "It's a great way to immediately answer your customer questions, to not lose the sale. People want quick answers the way they come to it.",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 4,
      name: "Devesh T.",
      role: "Technical Lead",
      title: "Works great with AI integrations",
      text: "The system provides great support channels and AI is a able to have options to talk to a person directly. Great tool for handling customer support channels",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 5,
      name: "Dave H.",
      role: "Business Owner",
      title: "Tidio is powerful and easy to install",
      text: "Large project with plenty of time to plan action and user people do to browse a questions. I can personally chat with visitors too. Highly recommended!",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 6,
      name: "Mark W.",
      role: "Director",
      title: "Exceptional AI agent with outstanding support!",
      text: "Perfect service on website for years. But I recently started looking for a vendor with AI-enabled chat capabilities. After trying three different tools, Tidio was the best for the best.",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 7,
      name: "Christopher W.",
      role: "Business Owner",
      title: "Exactly what I was looking for",
      text: "Implementation of this system and the ability to add specific AI to the knowledge base without having to search specific. Great tool for growing customer service",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    },
    {
      id: 8,
      name: "Shubit Y.",
      role: "Software Developer",
      title: "Great tool for handling customer support",
      text: "Earlier, we struggled to respond quickly to inquiries, but now, the chatbot handles most questions, saving us time and letting us focus on issues. It's also helping us engage visitors better",
      avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
    }
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B]">
            Find out why businesses love Altari
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden space-y-8">
          {/* Row 1 - Moving Right */}
          <div className="carousel-container">
            <div className="carousel-track carousel-right">
              {Array.from({ length: 6 }, () => testimonials).flat().map((testimonial, idx) => (
                <div key={idx} className="carousel-item" style={{ width: '280px' }}>
                  <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm text-[#1E1B4B]">{testimonial.name}</p>
                        <p className="text-xs text-[#6B7280]">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-sm text-[#1E1B4B] mb-3">
                      {testimonial.title}
                    </h3>

                    {/* Text */}
                    <p className="text-xs text-[#4A4A68] leading-relaxed mb-4 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Source Link */}
                    <a href="#" className="text-xs text-[#5B5FFB] font-medium hover:underline">
                      Source: Q2
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Left */}
          <div className="carousel-container">
            <div className="carousel-track carousel-left">
              {Array.from({ length: 6 }, () => [...testimonials].reverse()).flat().map((testimonial, idx) => (
                <div key={idx} className="carousel-item" style={{ width: '300px' }}>
                  <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm text-[#1E1B4B]">{testimonial.name}</p>
                        <p className="text-xs text-[#6B7280]">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-sm text-[#1E1B4B] mb-3">
                      {testimonial.title}
                    </h3>

                    {/* Text */}
                    <p className="text-xs text-[#4A4A68] leading-relaxed mb-4 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Source Link */}
                    <a href="#" className="text-xs text-[#5B5FFB] font-medium hover:underline">
                      Source: Q2
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .carousel-container {
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll linear infinite;
        }

        .carousel-right {
          animation-name: scrollRight;
          animation-duration: 40s;
        }

        .carousel-left {
          animation-name: scrollLeft;
          animation-duration: 45s;
        }

        .carousel-item {
          flex-shrink: 0;
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}