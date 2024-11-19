"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import cardsData from '@/data/cards.json';

type DeckType = 'rws' | 'gptarot';

export const useKeyboardNavigation = (currentPath: string) => {
  const router = useRouter();

  const getNextPath = (current: string) => {
    // Handle root path
    if (current === '/') return '/intro/1';
    
    const parts = current.split('/');
    const section = parts[1];
    const id = parseInt(parts[2]);

    switch(section) {
      case 'intro':
        return id === 3 ? '/card/0' : `/intro/${id + 1}`;
      case 'card':
        return id === 21 ? '/outro/1' : `/card/${id + 1}`;
      case 'outro':
        return id === 2 ? null : `/outro/${id + 1}`;
      default:
        return null;
    }
  };

  const getPrevPath = (current: string) => {
    // Handle root path
    if (current === '/') return null;
    
    const parts = current.split('/');
    const section = parts[1];
    const id = parseInt(parts[2]);

    switch(section) {
      case 'intro':
        return id === 1 ? '/' : `/intro/${id - 1}`;
      case 'card':
        return id === 0 ? '/intro/3' : `/card/${id - 1}`;
      case 'outro':
        return id === 1 ? '/card/21' : `/outro/${id - 1}`;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Navigation with left/right arrows
      if (event.key === 'ArrowRight') {
        const nextPath = getNextPath(currentPath);
        if (nextPath) router.push(nextPath);
      }
      if (event.key === 'ArrowLeft') {
        const prevPath = getPrevPath(currentPath);
        if (prevPath) router.push(prevPath);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPath, router]);

  return {};
}; 