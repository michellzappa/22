"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type DeckType = "rws" | "gptarot";

interface DeckPreferenceContextType {
  currentDeck: DeckType;
  toggleDeck: () => void;
}

const DeckPreferenceContext = createContext<
  DeckPreferenceContextType | undefined
>(undefined);

export function DeckPreferenceProvider({ children }: { children: ReactNode }) {
  const [currentDeck, setCurrentDeck] = useState<DeckType>("rws");

  useEffect(() => {
    const savedDeck = localStorage.getItem("preferredDeck") as DeckType;
    if (savedDeck) {
      setCurrentDeck(savedDeck);
    }
  }, []);

  const toggleDeck = () => {
    const newDeck = currentDeck === "rws" ? "gptarot" : "rws";
    setCurrentDeck(newDeck);
    localStorage.setItem("preferredDeck", newDeck);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        toggleDeck();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentDeck]);

  return (
    <DeckPreferenceContext.Provider value={{ currentDeck, toggleDeck }}>
      {children}
    </DeckPreferenceContext.Provider>
  );
}

export const useDeckPreference = () => {
  const context = useContext(DeckPreferenceContext);
  if (!context) {
    throw new Error(
      "useDeckPreference must be used within a DeckPreferenceProvider"
    );
  }
  return context;
};
