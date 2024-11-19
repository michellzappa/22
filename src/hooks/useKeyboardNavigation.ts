"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import cardsData from '@/data/cards.json';

export const useKeyboardNavigation = (currentPath: string) => {
  const router = useRouter();

  const getNextPath = (current: string) => {
    const parts = current.split('/');
    const section = parts[1];
    const currentId = parseInt(parts[2]);

    const lastCardIndex = cardsData.cards.length - 1;

    const navigationMap = {
      intro: {
        min: 1,
        max: 3,
        next: (id: number) => id === 3 ? '/card/0' : `/intro/${id + 1}`
      },
      card: {
        min: 0,
        max: lastCardIndex,
        next: (id: number) => id === lastCardIndex ? '/outro/1' : `/card/${id + 1}`
      },
      outro: {
        min: 1,
        max: 2,
        next: (id: number) => id === 2 ? null : `/outro/${id + 1}`
      }
    };

    const section_config = navigationMap[section as keyof typeof navigationMap];
    return section_config ? section_config.next(currentId) : null;
  };

  const getPrevPath = (current: string) => {
    const parts = current.split('/');
    const section = parts[1];
    const currentId = parseInt(parts[2]);

    const lastCardIndex = cardsData.cards.length - 1;

    const navigationMap = {
      intro: {
        min: 1,
        max: 3,
        prev: (id: number) => id === 1 ? '/' : `/intro/${id - 1}`
      },
      card: {
        min: 0,
        max: lastCardIndex,
        prev: (id: number) => id === 0 ? '/intro/3' : `/card/${id - 1}`
      },
      outro: {
        min: 1,
        max: 2,
        prev: (id: number) => id === 1 ? `/card/${lastCardIndex}` : `/outro/${id - 1}`
      }
    };

    const section_config = navigationMap[section as keyof typeof navigationMap];
    return section_config ? section_config.prev(currentId) : null;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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
}; 