import React, { createContext, useState, useContext, ReactNode } from 'react';

type Franquia = {
  id: string;
  nome: string;
  favorito: boolean;
};

type FranquiasContextType = {
  franquias: Franquia[];
  setFranquias: React.Dispatch<React.SetStateAction<Franquia[]>>;
};

const FranquiasContext = createContext<FranquiasContextType | undefined>(undefined);

export const FranquiasProvider = ({ children }: { children: ReactNode }) => {
  const [franquias, setFranquias] = useState<Franquia[]>([]);

  return (
    <FranquiasContext.Provider value={{ franquias, setFranquias }}>
      {children}
    </FranquiasContext.Provider>
  );
};

export const useFranquias = () => {
  const context = useContext(FranquiasContext);
  if (!context) {
    throw new Error('useFranquias deve ser usado dentro de um FranquiasProvider');
  }
  return context;
};
