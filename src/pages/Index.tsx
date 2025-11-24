// src/pages/Index.tsx
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { TokenCard } from '@/components/dashboard/TokenCard';
import { AgentCard } from '@/components/dashboard/AgentCard';
import { useWalletStore } from '@/store/walletStore';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const { tokens, agents } = useWalletStore();

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      
      <main className="ml-72 pt-20">
        <div className="p-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <p className="text-muted-foreground">
              Bienvenido a tu centro de comando cripto impulsado por IA
            </p>
          </motion.div>

          {/* Balance Card */}
          <div className="mb-8">
            <BalanceCard />
          </div>

          {/* Tokens Grid */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Tus Tokens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tokens.map((token, index) => (
                <TokenCard key={token.symbol} {...token} index={index} />
              ))}
            </div>
          </div>

          {/* Agents Grid */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Agentes de IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent, index) => (
                <AgentCard key={agent.id} {...agent} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
