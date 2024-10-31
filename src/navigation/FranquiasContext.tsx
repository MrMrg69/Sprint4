import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Franquia = {
  id: string;
  nome: string;
  favorito: boolean;
};

type FranquiasContextType = {
  franquias: Franquia[];
  setFranquias: React.Dispatch<React.SetStateAction<Franquia[]>>;
  toggleFavorito: (id: string) => void;
};

const FranquiasContext = createContext<FranquiasContextType | undefined>(undefined);

export const FranquiasProvider = ({ children }: { children: ReactNode }) => {
  const [franquias, setFranquias] = useState<Franquia[]>([
  ]);

  const toggleFavorito = (id: string) => {
    setFranquias((prevFranquias) =>
      prevFranquias.map((franquia) =>
        franquia.id === id
          ? { ...franquia, favorito: true }
          : { ...franquia, favorito: false }
      )
    );
  };

  return (
    <FranquiasContext.Provider value={{ franquias, setFranquias, toggleFavorito }}>
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
