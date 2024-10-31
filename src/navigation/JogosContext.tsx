import React, { createContext, useState, useContext, ReactNode } from 'react';

type Jogo = {
  id: string;
  nome: string;
  favorito: boolean;
};

type JogosContextType = {
  jogos: Jogo[];
  setJogos: React.Dispatch<React.SetStateAction<Jogo[]>>;
  toggleFavorito: (id: string) => void;
};

const JogosContext = createContext<JogosContextType | undefined>(undefined);

export const JogosProvider = ({ children }: { children: ReactNode }) => {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  const toggleFavorito = (id: string) => {
    setJogos((prevJogos) =>
      prevJogos.map((jogo) =>
        jogo.id === id ? { ...jogo, favorito: !jogo.favorito } : jogo
      )
    );
  };

  return (
    <JogosContext.Provider value={{ jogos, setJogos, toggleFavorito }}>
      {children}
    </JogosContext.Provider>
  );
};

export const useJogos = () => {
  const context = useContext(JogosContext);
  if (!context) {
    throw new Error('useJogos deve ser usado dentro de um JogosProvider');
  }
  return context;
};
