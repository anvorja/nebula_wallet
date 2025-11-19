import { motion } from 'framer-motion';
import { TrendingUp, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useWalletStore } from '@/store/walletStore';

export function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);
  const { totalBalance } = useWalletStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Balance Total</p>
            <div className="flex items-center gap-3">
              {showBalance ? (
                <motion.h2
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                >
                  ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </motion.h2>
              ) : (
                <h2 className="text-5xl font-bold text-muted-foreground">••••••</h2>
              )}
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="glass rounded-xl px-3 py-1.5 flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan">+12.5%</span>
          </div>
        </div>

        {/* Mini chart placeholder */}
        <div className="flex items-end gap-1 h-16">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${Math.random() * 100}%` }}
              transition={{ delay: i * 0.02, duration: 0.5 }}
              className="flex-1 bg-gradient-to-t from-primary/50 to-primary/20 rounded-t-sm"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
