import { createContext, useContext, useState, ReactNode } from 'react';

export type PortfolioMode = 'job' | 'freelance';

interface PortfolioModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(undefined);

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>('job');

  return (
    <PortfolioModeContext.Provider value={{ mode, setMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (!context) {
    throw new Error('usePortfolioMode must be used within a PortfolioModeProvider');
  }
  return context;
}
