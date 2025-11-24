// src/components/chat/ChatInterface.tsx
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestedActions = [
  '¿Cuál es mi balance total?',
  'Analizar riesgos del portafolio',
  'Buscar oportunidades de yield',
  'Mostrar transacciones recientes',
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '¡Hola! Soy tu copiloto de IA en Nebula Wallet. Puedo ayudarte a gestionar tu portafolio, analizar mercados, ejecutar operaciones y mucho más. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Esta es una respuesta simulada. El backend real está implementado y listo para integrarse.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-gradient-primary text-background'
                  : 'glass border border-glass-border/30'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Nebula AI</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Suggested Actions */}
      {messages.length === 1 && (
        <div className="px-6 pb-4">
          <p className="text-xs text-muted-foreground mb-3">Acciones sugeridas:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedActions.map((action) => (
              <button
                key={action}
                onClick={() => setInput(action)}
                className="glass rounded-xl px-3 py-2 text-xs text-left hover:border-primary/30 transition-all border border-glass-border/30"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-6 border-t border-glass-border/30">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu mensaje o comando..."
            className="flex-1 rounded-xl bg-input/50 border border-border/50 py-3 px-4 text-sm backdrop-blur-xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <Button
            onClick={handleSend}
            className="rounded-xl bg-gradient-primary text-background hover:opacity-90 transition-opacity shadow-neon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
