import { useState, useEffect } from 'react';

type DeckType = 'rws' | 'gptarot';

export const useDeckPreference = () => {
  const [currentDeck, setCurrentDeck] = useState<DeckType>('rws');

  const toggleDeck = () => {
    const newDeck = currentDeck === 'rws' ? 'gptarot' : 'rws';
    setCurrentDeck(newDeck);
    localStorage.setItem('preferredDeck', newDeck);
  };

  useEffect(() => {
    const savedDeck = localStorage.getItem('preferredDeck') as DeckType;
    if (savedDeck) {
      setCurrentDeck(savedDeck);
    }
  }, []);

  return { currentDeck, toggleDeck };
};