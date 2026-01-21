import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Paperclip, Mic, X } from 'lucide-react';

export default function ChatDemoWebChat() {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatEndRef = useRef(null);

  const messages = [
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
      text: 'Perfeito! 🌟 Temos várias opções lindas.\n\nVocê prefere com pendente (coração, cruz, inicial) ou somente a corrente?'
    },
    {
      id: 6,
      author: 'user',
      text: 'Com pendente de cruz!'
    },
    {
      id: 7,
      author: 'bot',
      text: 'Excelente escolha! ✨ Separei 3 opções especiais para você.\n\nQuer ver agora ou prefere que eu mande as fotos por WhatsApp?'
    },
    {
      id: 8,
      author: 'user',
      text: 'Pode mandar por WhatsApp'
    },
    {
      id: 9,
      author: 'bot',
      text: 'Perfeito! 📲 Já estou mandando!\n\nQualquer dúvida é só me chamar 💚'
    }
  ];

  useEffect(() => {
    setDisplayedMessages([]);
    let delay = 500;

    messages.forEach((msg, idx) => {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, { ...msg, visible: true }]);
      }, delay);

      delay += 2000;
      return () => clearTimeout(timeout);
    });
  }, []);

  useEffect(() => {
    if (chatEndRef.current?.parentElement) {
      chatEndRef.current.parentElement.scrollTop = chatEndRef.current.parentElement.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-white">
            <p className="font-semibold text-sm">Céu de Prata</p>
            <p className="text-xs text-blue-100">Online</p>
          </div>
        </div>
        <button className="text-white hover:text-blue-100">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-3 p-4 bg-gray-50">
        {displayedMessages.map((msg) => (
          <div key={msg.id} className="animate-fade-in-up">
            <div className={`flex gap-3 items-end ${msg.author === 'user' ? 'flex-row-reverse' : ''}`}>
              {msg.author === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                  C
                </div>
              )}
              <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.author === 'user' 
                  ? 'bg-blue-500 text-white rounded-br-none' 
                  : 'bg-gray-200 text-gray-900 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-3 flex items-center gap-2">
        <button className="text-blue-400 hover:text-blue-500 flex-shrink-0">
          <Paperclip className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 bg-gray-100 text-sm text-gray-900 placeholder-gray-500 rounded-full px-4 py-2 outline-none focus:bg-gray-50"
        />
        <button className="text-blue-400 hover:text-blue-500 flex-shrink-0">
          <Mic className="w-5 h-5" />
        </button>
      </div>

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

        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}