// src/components/layout/Header.tsx
import { motion } from 'framer-motion';
import { Bell, Search, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWalletStore } from '@/store/walletStore';

export function Header() {
  const { isConnected, address, connectWallet } = useWalletStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed left-72 right-0 top-0 z-30 glass border-b border-glass-border/30"
    >
      <div className="flex h-20 items-center justify-between px-8">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar tokens, transacciones..."
              className="w-full rounded-xl bg-input/50 border border-border/50 py-2.5 pl-10 pr-4 text-sm backdrop-blur-xl focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-xl hover:bg-sidebar-accent/50"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-neon-cyan" />
          </Button>

          {isConnected ? (
            <div className="glass rounded-xl px-4 py-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm font-medium">{address}</span>
            </div>
          ) : (
            <Button
              onClick={connectWallet}
              className="rounded-xl bg-gradient-primary text-background font-medium hover:opacity-90 transition-opacity shadow-neon"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Conectar Wallet
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
