// src/components/dashboard/AgentCard.tsx
import { motion } from 'framer-motion';
import { Bot, Activity, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AgentCardProps {
  name: string;
  status: 'active' | 'idle' | 'analyzing';
  description: string;
  lastAction: string;
  performance: number;
  index: number;
}

const statusConfig = {
  active: { color: 'text-neon-cyan', bg: 'bg-neon-cyan', label: 'Activo' },
  idle: { color: 'text-muted-foreground', bg: 'bg-muted-foreground', label: 'Inactivo' },
  analyzing: { color: 'text-secondary', bg: 'bg-secondary', label: 'Analizando' },
};

export function AgentCard({ name, status, description, lastAction, performance, index }: AgentCardProps) {
  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="glass rounded-2xl p-6 border border-glass-border/30 hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <div className={`h-1.5 w-1.5 rounded-full ${config.bg} ${status === 'active' ? 'animate-pulse' : ''}`} />
              <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm font-semibold text-neon-cyan">{performance}%</div>
          <div className="text-xs text-muted-foreground">Rendimiento</div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
        <Activity className="h-3.5 w-3.5" />
        {lastAction}
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-xl border-primary/30 hover:bg-primary/10 hover:text-primary"
        >
          Ver Detalles
        </Button>
        <Button
          size="sm"
          className="flex-1 rounded-xl bg-gradient-primary text-background hover:opacity-90"
        >
          <Zap className="mr-1.5 h-3.5 w-3.5" />
          Ejecutar
        </Button>
      </div>
    </motion.div>
  );
}
