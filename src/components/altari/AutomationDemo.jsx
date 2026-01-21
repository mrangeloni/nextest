import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, MessageSquare, Music, CheckCircle2, Zap, Users, Tag, Send, ShoppingBag, Sliders, Phone, Video, Smile, Image as ImageIcon, Heart, AtSign, Lock, Plus, Signal, Wifi, Mic, MessageSquareText, Edit2, MoreVertical, Plane } from 'lucide-react';
import ChatDemoWebChat from './ChatDemoWebChat';
import EcommerceDemoWithChat from './EcommerceDemoWithChat';

const features = [
  { icon: Zap, label: 'Fluxos' },
  { icon: MessageCircle, label: 'IA de respostas' },
  { icon: Users, label: 'Qualificação de leads' },
  { icon: ShoppingBag, label: 'Catálogo/produtos' },
  { icon: Tag, label: 'Tags e segmentação' },
  { icon: Send, label: 'Disparos/broadcast' },
  { icon: Sliders, label: 'Integrações (CRM/pagamento)' },
  { icon: MessageSquare, label: 'Handoff para humano' },
  { icon: CheckCircle2, label: 'Relatórios' },
];

const conversations = {
  whatsapp: [
    { type: 'user', text: 'Oi! Tem entrega pra BH?' },
    { type: 'bot', text: 'Oi! 😊 Sim. Pra BH chega em 2–4 dias. O que você procura hoje: colares, brincos ou pulseiras?' },
    { type: 'user', text: 'Quero um colar com cruz.' },
    { type: 'bot', text: 'Perfeito. Qual seu orçamento? (até R$99 / R$99–199 / acima de R$199)' },
    { type: 'user', text: 'R$99–199' },
    { type: 'bot', text: 'Show. Separei 3 opções com mais avaliações. Quer ver agora?', hasButtons: true, buttons: ['Ver opções', 'Falar com atendente'] },
  ],
  instagram: [
    { type: 'user', text: 'Oii! Vi nos stories 😍 tem aquele conjunto dourado?' },
    { type: 'bot', text: 'Tem sim! ✨ Você prefere mais delicado ou mais chamativo?' },
    { type: 'user', text: 'Delicado' },
    { type: 'bot', text: 'Amei. Qual tamanho de pulso (P/M/G) e você quer com banho 18k?' },
    { type: 'user', text: 'M e sim' },
    { type: 'bot', text: 'Fechado. Quer finalizar por aqui ou te mando o link do checkout?', hasButtons: true, buttons: ['Finalizar aqui', 'Mandar link'] },
  ],
  tiktok: [
    { type: 'user', text: 'Isso é original? Chega rápido?' },
    { type: 'bot', text: 'Sim ✅ Original e com garantia. Pra sua cidade, entrega média 3–6 dias. Qual cor você quer: preto, azul ou rosa?' },
    { type: 'user', text: 'Preto' },
    { type: 'bot', text: 'Boa. Últimas unidades hoje. Quer pagar no Pix com desconto ou cartão?', hasButtons: true, buttons: ['Pix (10% off)', 'Cartão'] },
  ],
  comments: [
    { type: 'user', text: 'EU QUERO' },
    { type: 'bot', text: 'Te enviei todas as informações por direct' },
  ],
};

const channelConfig = {
  whatsapp: { name: 'WhatsApp', icon: '💬', bg: 'bg-[#25D366]/10' },
  instagram: { name: 'Instagram', icon: '📷', bg: 'bg-gradient-to-r from-pink-100 to-purple-100' },
  tiktok: { name: 'TikTok', icon: '♪', bg: 'bg-black/5' },
  comments: { name: 'Comentários', icon: '💬', bg: 'bg-blue-50' },
  webchat: { name: 'Web Chat Flutuante', icon: '💬', bg: 'bg-cyan-50' },
};

function ChatMessage({ message, isUser, isTyping }) {
  return (
    <div className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
          A
        </div>
      )}
      <div
        className={`max-w-xs px-3 py-2 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-[#E7E7EB] text-[#1E1B4B]'
            : 'bg-white text-[#1E1B4B] border border-[#E2E8F0]'
        }`}
        style={{ borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px' }}
      >
        {isTyping ? (
          <div className="flex gap-1">
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        ) : (
          message.text
        )}
      </div>
    </div>
  );
}

function ChatDemoWhatsApp({ channel }) {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setDisplayedMessages([]);

    const messages = conversations[channel];
    let delay = 500;

    messages.forEach((msg, idx) => {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, { ...msg, id: idx }]);
      }, delay);

      delay += msg.type === 'user' ? 1200 : 1800;

      return () => clearTimeout(timeout);
    });
  }, [channel]);

  useEffect(() => {
    if (chatEndRef.current?.parentElement) {
      chatEndRef.current.parentElement.scrollTop = chatEndRef.current.parentElement.scrollHeight;
    }
  }, [displayedMessages]);

  const getTime = (idx) => {
    const hours = 18;
    const minutes = 21 + Math.floor(idx / 2);
    return `${hours}:${String(minutes).padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0a0a0a] flex flex-col h-full relative pt-8">
      {/* Status Bar */}
      <div className="px-4 py-2 flex items-center justify-between text-white text-xs">
        <span>10:57</span>
        <div className="flex gap-1 items-center">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <span className="bg-red-600 px-1.5 rounded-full text-[10px]">14</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700 bg-[#1a1a1a]">
        <button className="text-white text-lg">←</button>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-white" />
            <span className="font-semibold text-white text-sm">Legbox</span>
          </div>
          <p className="text-xs text-gray-400">Conta comercial</p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-2 px-3 py-4 pr-2 bg-[#0a0a0a]">
        {displayedMessages.map((msg, idx) => (
          <div key={msg.id}>
            <div className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-[#262626] text-[#E4E4E7]'
                    : 'bg-[#056162] text-white'
                }`}
                style={{ borderRadius: msg.type === 'user' ? '18px 18px 18px 4px' : '18px 18px 4px 18px' }}
              >
                {msg.text}
                <div className={`text-xs mt-1 flex items-center gap-1 ${msg.type === 'user' ? 'text-gray-500' : 'text-gray-300'}`}>
                  <span>{getTime(idx)}</span>
                  {msg.type === 'bot' && <span>✓✓</span>}
                </div>
              </div>
            </div>
            {msg.type === 'bot' && msg.hasButtons && (
              <div className="flex justify-end mt-2 mr-0">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <div className="flex-shrink-0 w-40 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/1e65b6f1e_image.png"
                      alt="Produto"
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-xs font-medium text-white mb-2">Legging Fitness Glow Preta</p>
                      <button className="w-full text-xs text-[#31A24C] font-medium py-2 border border-[#31A24C] rounded flex items-center justify-center gap-1">
                        ✓ Ver Produto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>



      {/* Input Area */}
      <div className="px-4 py-3 flex items-center gap-3 bg-[#1a1a1a] border-t border-gray-700">
        <button className="text-[#31A24C]">
          <Plus className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Message..."
          className="flex-1 bg-[#262626] text-white text-sm px-3 py-2 rounded-full placeholder-gray-500 outline-none"
        />
        <button className="text-gray-400">
          <MessageCircle className="w-5 h-5" />
        </button>
        <button className="text-gray-400">
          <ImageIcon className="w-5 h-5" />
        </button>
        <button className="text-gray-400">
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function ChatDemoTikTok({ channel }) {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setDisplayedMessages([]);

    const messages = conversations[channel];
    let delay = 500;

    messages.forEach((msg, idx) => {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, { ...msg, id: idx }]);
      }, delay);

      delay += msg.type === 'user' ? 1200 : 1800;

      return () => clearTimeout(timeout);
    });
  }, [channel]);

  useEffect(() => {
    if (chatEndRef.current?.parentElement) {
      chatEndRef.current.parentElement.scrollTop = chatEndRef.current.parentElement.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="bg-[#F5F5F5] flex flex-col h-full relative pt-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-4">
        <button className="text-[#1E1B4B] text-lg">←</button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <span className="font-semibold text-sm text-[#1E1B4B]">Antonio</span>
        </div>
        <button className="text-[#1E1B4B] text-lg">⋯</button>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-4 border-b border-gray-200 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
          A
        </div>
        <p className="font-semibold text-[#1E1B4B] text-sm">Antonio</p>
        <p className="text-xs text-[#6B7280]">@antonio425</p>
        <p className="text-xs text-[#6B7280] mt-1">36 videos · 227 followers</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-3 px-4 py-3">
        {displayedMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm leading-relaxed ${
                msg.type === 'user'
                  ? 'bg-[#00BFFF] text-white text-right'
                  : 'bg-white text-[#1E1B4B] border border-[#E2E8F0]'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Reactions Bar */}
      <div className="px-4 py-3 flex gap-3 border-t border-gray-200">
        <button className="text-red-500 hover:text-red-600">
          <Heart className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-500">
          <Smile className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-500">
          <CheckCircle2 className="w-5 h-5" />
        </button>
        <button className="text-xs text-[#6B7280] hover:text-[#6B7280]">Nudge</button>
        <button className="text-xs text-[#0099FF] hover:text-[#0099FF]">Share pos</button>
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 flex items-center gap-3 border-t border-gray-200">
        <button className="w-8 h-8 rounded-full bg-[#0099FF] flex items-center justify-center text-white">
          <ImageIcon className="w-4 h-4" />
        </button>
        <input
          type="text"
          placeholder="Message..."
          className="flex-1 bg-transparent text-sm text-[#1E1B4B] placeholder-[#9CA3AF] outline-none"
        />
        <button className="text-[#6B7280]">
          <Smile className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function ChatDemoInstagram({ channel }) {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setDisplayedMessages([]);

    const messages = conversations[channel];
    let delay = 500;

    messages.forEach((msg, idx) => {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, { ...msg, id: idx }]);
      }, delay);

      delay += msg.type === 'user' ? 1200 : 1800;

      return () => clearTimeout(timeout);
    });
  }, [channel]);

  useEffect(() => {
    if (chatEndRef.current?.parentElement) {
      chatEndRef.current.parentElement.scrollTop = chatEndRef.current.parentElement.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="bg-white flex flex-col h-full relative pt-8">
      {/* Status Bar */}
      <div className="px-4 py-2 flex items-center justify-between text-gray-800 text-xs font-medium">
        <span>11:38</span>
        <div className="flex gap-0.5 items-center">
          <span className="text-gray-600">▓▓▓</span>
          <span className="text-gray-600">▓▓</span>
          <span className="text-gray-600">▓▓▓▓</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <button className="text-gray-800">
          <AtSign className="w-5 h-5" />
        </button>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div>
              <p className="font-semibold text-sm text-gray-900">tatianaloureiro</p>
              <p className="text-xs text-gray-500">Active 13m ago</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-gray-800">
            <Phone className="w-5 h-5" />
          </button>
          <button className="text-gray-800">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-3 px-4 py-4 bg-white">
        {displayedMessages.map((msg, idx) => (
          <div key={msg.id}>
            <div className={`flex ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              {msg.type === 'bot' && (
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
                  alt="Cliente"
                  className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-gray-200 text-gray-900 ml-2'
                    : 'bg-gray-100 text-gray-900 mr-2'
                }`}
              >
                {msg.text}
              </div>
            </div>
            {msg.type === 'bot' && idx === 0 && (
              <div className="flex justify-start mt-2 mr-2">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/1e65b6f1e_image.png"
                  alt="Produto"
                  className="w-48 h-40 rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 flex items-center gap-2 border-t border-gray-200 bg-white">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-blue-500" />
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-500 outline-none"
          />
        </div>
        <button className="text-gray-700 hover:text-gray-900">
          <Smile className="w-5 h-5" />
        </button>
        <button className="text-gray-700 hover:text-gray-900">
          <ImageIcon className="w-5 h-5" />
        </button>
        <button className="text-gray-700 hover:text-gray-900">
          <Heart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function ChatDemoComments({ channel }) {
  const [displayedComments, setDisplayedComments] = useState([]);
  const chatEndRef = useRef(null);

  const comments = [
    { 
      id: 1, 
      author: 'isabella.sales', 
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      text: 'Eu quero! Adorei ❤️', 
      likes: 124, 
      time: '2h',
      hasReply: true,
      reply: { author: 'legbox', text: 'Perfeito! Te enviei o link por direct 🎁', time: '1h 55min' }
    },
    { 
      id: 2, 
      author: 'natalia.costa', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      text: 'Eu quero demais, como faço para comprar?', 
      likes: 89, 
      time: '1h',
      hasReply: true,
      reply: { author: 'legbox', text: 'Clica no link da bio! 🛍️ Entrega para sua cidade em 2-4 dias', time: '58min' }
    },
    { 
      id: 3, 
      author: 'sophia.oliveira', 
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      text: 'Eu quero! 🔥', 
      likes: 156, 
      time: '45min',
      hasReply: true, 
      reply: { author: 'legbox', text: 'Sucesso! Qual cor você prefere? Temos em preto, branco e rosa', time: '42min' }
    },
    { 
      id: 4, 
      author: 'marina.silva', 
      avatar: 'https://images.unsplash.com/photo-1517070213202-1078a8b6bd59?w=400&h=400&fit=crop',
      text: 'Que lindo! Eu quero muito!', 
      likes: 67, 
      time: '20min',
      hasReply: true,
      reply: { author: 'legbox', text: 'Adorei sua energia! Te mandei um desconto especial no DM ✨', time: '18min' }
    },
    { 
      id: 5, 
      author: 'carolina.fe', 
      avatar: 'https://images.unsplash.com/photo-1519631128182-7860232cdc14?w=400&h=400&fit=crop',
      text: 'Eu quero demais! Manda pro meu dm 🙏', 
      likes: 98, 
      time: '10min',
      hasReply: true,
      reply: { author: 'legbox', text: 'Já mandei! Aproveita e aproveita a promoção exclusiva que enviamos ❤️', time: '8min' }
    },
  ];

  useEffect(() => {
    setDisplayedComments([]);
    let delay = 500;

    comments.forEach((comment, idx) => {
      // Show comment
      const commentTimeout = setTimeout(() => {
        setDisplayedComments((prev) => [...prev, { ...comment, showReply: false }]);
      }, delay);

      delay += 1200;

      // Show reply
      if (comment.hasReply) {
        const replyTimeout = setTimeout(() => {
          setDisplayedComments((prev) => prev.map(c => c.id === comment.id ? { ...c, showReply: true } : c));
        }, delay);
        delay += 1200;
      }

      return () => {
        clearTimeout(commentTimeout);
      };
    });
  }, [channel]);

  return (
    <div className="bg-white flex flex-col h-full relative pt-8">
      {/* Status Bar */}
      <div className="px-4 py-2 flex items-center justify-between text-gray-800 text-xs font-medium bg-white border-b border-gray-200">
        <span>14:35</span>
        <div className="flex gap-1 items-center">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200 bg-white">
        <span className="font-semibold text-gray-900 text-sm">Comentários</span>
        <button className="text-gray-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 14a2 2 0 110-4 2 2 0 010 4zM12 14a2 2 0 110-4 2 2 0 010 4zM18 14a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Comments Container */}
      <div className="flex-1 overflow-y-auto px-0 py-0">
        {displayedComments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 animate-fade-in-up">
            {/* Main Comment */}
            <div className="px-4 py-3">
              <div className="flex gap-3">
                <img 
                  src={comment.avatar} 
                  alt={comment.author}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-sm text-gray-900 mt-0.5">{comment.text}</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-600">
                    <button className="hover:text-gray-900">Gosto</button>
                    <button className="hover:text-gray-900">Responder</button>
                  </div>
                </div>
                <button className="flex-shrink-0">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Reply from Bot */}
            {comment.hasReply && comment.showReply && (
              <div className="px-4 py-2 bg-gray-50 border-l-2 border-blue-500 ml-4 animate-fade-in-up">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                    L
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-900">legbox</span>
                      <span className="text-xs text-gray-500">{comment.reply.time}</span>
                    </div>
                    <p className="text-xs text-gray-900 mt-0.5">{comment.reply.text}</p>
                    <div className="flex gap-4 mt-1 text-xs text-gray-600">
                      <button className="hover:text-gray-900">Gosto</button>
                    </div>
                  </div>
                  <button className="flex-shrink-0">
                    <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Emoji Reactions */}
      <div className="flex gap-2 px-4 py-2 bg-white border-t border-gray-200 justify-center overflow-x-auto">
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">❤️</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">🔥</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">😍</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">😂</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">🙏</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">👏</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">🎉</button>
        <button className="hover:scale-125 transition-transform flex-shrink-0 text-lg">💪</button>
      </div>

      {/* Input Area */}
      <div className="px-3 py-2.5 flex items-center gap-2 border-t border-gray-200 bg-white">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966498674901863aef2507c/b6dd10280_Gemini_Generated_Image_b7xb5cb7xb5cb7xb.png"
          alt="Você"
          className="w-6 h-6 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
          <input
            type="text"
            placeholder="Adicione um comentário..."
            className="flex-1 bg-transparent text-xs text-gray-900 placeholder-gray-500 outline-none"
          />
        </div>
        <button className="text-blue-600 text-lg">♥️</button>
      </div>
    </div>
  );
}

function ChatDemo({ channel }) {
  if (channel === 'tiktok') return <ChatDemoTikTok channel={channel} />;
  if (channel === 'instagram') return <ChatDemoInstagram channel={channel} />;
  if (channel === 'comments') return <ChatDemoComments channel={channel} />;
  if (channel === 'webchat') return <EcommerceDemoWithChat />;
  return <ChatDemoWhatsApp channel={channel} />;
}

export default function AutomationDemo() {
  const [activeChannel, setActiveChannel] = useState('webchat');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, idx) => {
              setTimeout(() => el.classList.add('animate-in'), idx * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mb-4">
              Automação de atendimento que vende no piloto automático
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              As mesmas funcionalidades do ManyChat — para WhatsApp, Instagram e TikTok.
            </p>



            {/* Channel Buttons */}
            <div className="space-y-3">
              {Object.entries(channelConfig).map(([key, config]) => {
                const icons = {
                  whatsapp: <MessageCircle className="w-5 h-5 flex-shrink-0" />,
                  instagram: <Heart className="w-5 h-5 flex-shrink-0" />,
                  tiktok: <Music className="w-5 h-5 flex-shrink-0" />,
                  comments: <MessageSquareText className="w-5 h-5 flex-shrink-0" />
                };
                const labels = {
                  whatsapp: 'Atendimento no WhatsApp automatizado',
                  instagram: 'Atendimento no Instagram automatizado',
                  tiktok: 'Atendimento no TikTok automatizado',
                  comments: 'Automação de comentários',
                  webchat: 'Web Chat Flutuante'
                };
                return (
                  <button
                    key={key}
                    onClick={() => setActiveChannel(key)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      activeChannel === key
                        ? 'bg-[#5B5FFB]/10 text-[#5B5FFB] font-medium'
                        : 'bg-transparent text-[#4A4A68] hover:bg-gray-100 font-normal'
                    }`}
                  >
                    {icons[key]}
                    {labels[key]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Phone Frame */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex justify-center">
            <div
              className="rounded-[3rem] overflow-hidden shadow-2xl"
              style={{
                width: '320px',
                aspectRatio: '9/19',
                padding: '11px',
                background: 'linear-gradient(145deg, #1a1a1e 0%, #0a0a0f 50%, #000000 100%)',
                boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.15)',
              }}
            >
              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20 rounded-[2.75rem]" />

              {/* Screen */}
              <div className="relative rounded-[2.75rem] overflow-hidden h-full flex flex-col bg-white">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-[16px] z-10" />

                {/* Chat Content */}
                <ChatDemo channel={activeChannel} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

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
    </section>
  );
}