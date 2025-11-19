import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Wallet, 
  MessageSquare, 
  Bot, 
  TrendingUp, 
  Settings,
  Bitcoin
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Wallet, label: 'Tokens', path: '/tokens' },
  { icon: MessageSquare, label: 'AI Copilot', path: '/chat' },
  { icon: Bot, label: 'Agentes', path: '/agents' },
  { icon: TrendingUp, label: 'Estrategias', path: '/strategies' },
  { icon: Settings, label: 'Ajustes', path: '/settings' },
];

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed left-0 top-0 z-40 h-screen w-72 glass border-r border-glass-border/30"
    >
      <div className="flex h-full flex-col p-6">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary">
            <Bitcoin className="h-6 w-6 text-background" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nebula Wallet
            </h1>
            <p className="text-xs text-muted-foreground">AI-Powered</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-sidebar-accent/50 hover:text-foreground"
              activeClassName="bg-sidebar-accent text-foreground shadow-neon"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto">
          <div className="glass rounded-xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-medium">Sistema operativo</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Todos los agentes activos
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
