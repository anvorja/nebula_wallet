// src/pages/Chat.tsx
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { MessageSquare } from 'lucide-react';

const Chat = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      
      <main className="ml-72 pt-20 h-screen">
        <div className="p-8 h-[calc(100vh-5rem)]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">AI Copilot</h1>
            </div>
            <p className="text-muted-foreground">
              Tu asistente inteligente para gestión de criptomonedas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl h-[calc(100%-6rem)] border border-glass-border/30"
          >
            <ChatInterface />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
