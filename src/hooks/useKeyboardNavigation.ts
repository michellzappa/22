"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import slidesData from '@/data/slides.json';

export const useKeyboardNavigation = (currentPath: string) => {
  const router = useRouter();
  
  const getCurrentSlideIndex = () => {
    const [type, id] = currentPath.slice(1).split('/');
    const slideId = `${type}-${id}`;
    return slidesData.slides.findIndex(slide => slide.id === slideId);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = getCurrentSlideIndex();
      
      if (event.key === 'ArrowRight' && currentIndex < slidesData.slides.length - 1) {
        const nextSlide = slidesData.slides[currentIndex + 1];
        const [type, id] = nextSlide.id.split('-');
        router.push(`/${type}/${id}`);
      }
      
      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        const prevSlide = slidesData.slides[currentIndex - 1];
        const [type, id] = prevSlide.id.split('-');
        router.push(`/${type}/${id}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPath, router]);
}; 