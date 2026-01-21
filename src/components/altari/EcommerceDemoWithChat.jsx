import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Heart, ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Colar Ouro Delicado',
    price: 'R$ 189,00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Pulseira Minimalista',
    price: 'R$ 129,00',
    image: 'https://images.unsplash.com/photo-1586253408e0-cf2d7b2b86f7?w=300&h=300&fit=crop',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Anel Dourado',
    price: 'R$ 159,00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Brinco Elegante',
    price: 'R$ 99,00',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
    rating: 4.7,
  },
];

const chatMessages = [
  {
    id: 1,
    author: 'bot',
    text: 'Oii 💙 Seja bem-vinda a Céu de Prata! ✨\n\nQual o seu nome?'
  },
  {
    id: 2,
    author: 'user',
    text: 'Oi! Meu nome é Julia'
  },
  {
    id: 3,
    author: 'bot',
    text: 'Que nome lindo, Julia! 😍\n\nO que você procura hoje?'
  },
  {
    id: 4,
    author: 'user',
    text: 'Procuro um colar delicado de ouro'
  },
  {
    id: 5,
    author: 'bot',
    text: 'Perfeito! 🌟 Temos várias opções lindas.\n\nVocê prefere com pendente ou somente a corrente?'
  },
  {
    id: 6,
    author: 'user',
    text: 'Com pendente de cruz!'
  },
  {
    id: 7,
    author: 'bot',
    text: 'Excelente escolha! ✨ O nosso colar "Ouro Delicado" é perfeito!\n\nQuer ver mais detalhes?'
  },
  {
    id: 8,
    author: 'user',
    text: 'Sim! Me interessa'
  },
  {
    id: 9,
    author: 'bot',
    text: 'Ótimo! 🛍️ Estou mandando as fotos por WhatsApp.\n\nQualquer dúvida é só me chamar! 💚'
  }
];

export default function EcommerceDemoWithChat() {
  const [chatOpen, setChatOpen] = useState(true);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (!chatOpen) {
      setDisplayedMessages([]);
      return;
    }

    setDisplayedMessages([]);
    let delay = 500;

    chatMessages.forEach((msg) => {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, msg]);
      }, delay);

      delay += msg.author === 'user' ? 1500 : 2000;
      return () => clearTimeout(timeout);
    });
  }, [chatOpen]);

  useEffect(() => {
    if (chatEndRef.current?.parentElement) {
      chatEndRef.current.parentElement.scrollTop = chatEndRef.current.parentElement.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="relative w-full h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      {/* E-commerce Mockup */}
      <div className="h-full overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-6 py-4 sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-white">Céu de Prata ✨</h1>
          <p className="text-blue-100 text-sm">Joias delicadas e elegantes</p>
        </div>

        {/* Products Grid */}
        <div className="p-6 grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{product.name}</h3>
                <p className="text-blue-600 font-bold text-sm mb-2">{product.price}</p>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-8 text-center border-t border-gray-100">
          <p className="text-gray-600 text-sm">Dúvida? Fale com nosso atendente! 💬</p>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="absolute bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Modal */}
      {chatOpen && (
        <div className="absolute bottom-6 right-6 w-80 h-96 bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col z-50 animate-slide-up">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-white">
                <p className="font-semibold text-sm">Céu de Prata</p>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:text-blue-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-4 bg-gray-50">
            {displayedMessages.map((msg) => (
              <div key={msg.id} className="animate-fade-in-up">
                <div className={`flex gap-2 items-end ${msg.author === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.author === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      C
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.author === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="bg-white border-t border-gray-200 p-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Olá..."
              className="flex-1 bg-gray-100 text-xs text-gray-900 placeholder-gray-500 rounded-full px-3 py-2 outline-none focus:bg-gray-50"
              disabled
            />
            <button className="text-blue-400 hover:text-blue-500 flex-shrink-0">
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}