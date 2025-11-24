// src/components/dashboard/TokenCard.tsx
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TokenCardProps {
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  icon: string;
  index: number;
}

export function TokenCard({ symbol, name, balance, value, change24h, icon, index }: TokenCardProps) {
  const isPositive = change24h >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="glass rounded-2xl p-6 cursor-pointer border border-glass-border/30 hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{symbol}</h3>
            <p className="text-sm text-muted-foreground">{name}</p>
          </div>
        </div>
        
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isPositive ? 'text-neon-cyan' : 'text-destructive'
        }`}>
          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          {Math.abs(change24h).toFixed(2)}%
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-2xl font-bold">
          ${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-muted-foreground">
          {balance.toLocaleString('en-US', { maximumFractionDigits: 4 })} {symbol}
        </p>
      </div>
    </motion.div>
  );
}
