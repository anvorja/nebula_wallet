import { create } from 'zustand';

interface Token {
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  icon: string;
}

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'analyzing';
  description: string;
  lastAction: string;
  performance: number;
}

interface WalletState {
  isConnected: boolean;
  address: string | null;
  totalBalance: number;
  tokens: Token[];
  agents: Agent[];
  connectWallet: () => void;
  disconnectWallet: () => void;
}

// Mock data
const mockTokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', balance: 2.45, value: 8540.50, change24h: 5.23, icon: '⟠' },
  { symbol: 'BTC', name: 'Bitcoin', balance: 0.15, value: 6750.00, change24h: -2.15, icon: '₿' },
  { symbol: 'USDC', name: 'USD Coin', balance: 5000, value: 5000.00, change24h: 0.01, icon: '○' },
  { symbol: 'SOL', name: 'Solana', balance: 45.2, value: 4068.00, change24h: 8.45, icon: '◎' },
];

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'RiskGuardian',
    status: 'active',
    description: 'Monitorea riesgos y detecta fraudes en tiempo real',
    lastAction: 'Alertó sobre gas elevado hace 2 min',
    performance: 94.5,
  },
  {
    id: '2',
    name: 'PortfolioOptimizer',
    status: 'analyzing',
    description: 'Optimiza tu portafolio con estrategias DeFi',
    lastAction: 'Analizando oportunidades de yield farming',
    performance: 87.2,
  },
  {
    id: '3',
    name: 'SocialTradingBot',
    status: 'idle',
    description: 'Replica estrategias de los mejores traders',
    lastAction: 'Última ejecución hace 1 hora',
    performance: 91.8,
  },
];

export const useWalletStore = create<WalletState>((set) => ({
  isConnected: false,
  address: null,
  totalBalance: 24358.50,
  tokens: mockTokens,
  agents: mockAgents,
  connectWallet: () =>
    set({
      isConnected: true,
      address: '0x742d...3a4f',
    }),
  disconnectWallet: () =>
    set({
      isConnected: false,
      address: null,
    }),
}));
