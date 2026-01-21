import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Package } from 'lucide-react';

export default function PhoneAnimation() {
  const [messages, setMessages] = useState([]);
  const [topMessage, setTopMessage] = useState(null);

  const clientNames = ['Mariana Silva', 'Juliana Costa', 'Amanda Santos', 'Beatriz Oliveira', 'Carolina Ferreira', 'Daniela Alves'];
  const times = ['13:24', '12:50', '10:14', '09:48', '09:20', '08:55'];
  const [clientIndex, setClientIndex] = useState(-1);

  useEffect(() => {
    // Initial setup
    const initialMessages = clientNames.map((name, index) => ({
      id: index,
      name: name,
      time: times[index],
      isNew: false
    }));
    setMessages(initialMessages);
    setTopMessage(clientNames[0]);

    // Add new message every 5 seconds in sequential order
    const interval = setInterval(() => {
      setClientIndex(prev => {
        const nextIndex = (prev + 1) % clientNames.length;
        const newMessage = {
          id: Date.now(),
          name: clientNames[nextIndex],
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          isNew: true
        };

        // Show top notification
        setTopMessage(clientNames[nextIndex]);

        // Add message to list
        setMessages(prevMessages => {
          const updated = [newMessage, ...prevMessages];
          return updated.length > 6 ? updated.slice(0, 6) : updated;
        });

        // Remove animation class
        setTimeout(() => {
          setMessages(prev => prev.map(msg => 
            msg.id === newMessage.id ? { ...msg, isNew: false } : msg
          ));
        }, 600);

        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden" style={{ height: '500px' }}>
      {/* Phone Frame */}
      <div 
        className="relative overflow-hidden" 
        style={{ 
          aspectRatio: '9/19', 
          padding: '12px',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #000 50%, #0a0a0a 100%)',
          borderRadius: '3rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(255, 255, 255, 0.1), inset 2px 2px 5px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Screen with rounded corners */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col">
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
          
          {/* Camera and speaker detail */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full" />



          {/* Phone content */}
          <div className="w-full h-full bg-white flex flex-col pt-8 pb-4 px-4 overflow-hidden">
            {/* Header */}
            <div className="space-y-3 mb-4">
              {/* Search bar */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Pesquisar..." 
                  className="bg-transparent flex-1 text-sm text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-full">
                  <div className="w-3 h-3 bg-white rounded-full" />
                  <span className="text-xs font-medium">Etiquetas</span>
                </div>
              </div>

              {/* Secondary tabs */}
              <div className="flex justify-between text-xs text-blue-600">
                <span className="font-medium">Listas de transmissão</span>
                <span className="font-medium">Novo grupo</span>
              </div>

              {/* Archived */}
              <div className="flex items-center justify-between text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Arquivadas</span>
                </div>
                <span className="text-blue-600 font-medium">6</span>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto space-y-0.5 pr-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-center gap-3 p-2 rounded-lg ${
                    message.isNew 
                      ? 'animate-message-in' 
                      : 'opacity-100 scale-100'
                  } hover:bg-gray-50`}
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/40?u=${message.id}`}
                      alt={message.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Message content */}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs text-gray-800">{message.name}</div>
                    <div className="flex items-center gap-1 text-xs text-blue-600">
                      <ShoppingCart className="w-3 h-3" />
                      <span>Um novo pedido realizado</span>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="text-xs text-gray-500 flex-shrink-0">{message.time}</div>
                </div>
              ))}
            </div>

            {/* Bottom safety area */}
            <div className="h-6" />
          </div>
        </div>
      </div>

      {/* Floating shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-[#1E1B4B]/30 to-transparent blur-xl rounded-full" />

      <style jsx>{`
        @keyframes messageIn {
          0% {
            opacity: 0;
            transform: translateY(-15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-message-in {
          animation: messageIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes phoneSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-phone-in {
          animation: phoneSlideDown 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}