"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
interface CardProviderProps {
  shuffledDeck: boolean;
  setShuffledDeck: Dispatch<React.SetStateAction<any>>;
}

export const CardContext = createContext<CardProviderProps>({
  shuffledDeck: false,
  setShuffledDeck: () => false,
});

export const CardContextProvider = ({ children }: { children: ReactNode }) => {
  const [shuffledDeck, setShuffledDeck] = useState<any>();

  return (
    <CardContext.Provider
      value={{
        shuffledDeck,
        setShuffledDeck,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
