"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

const Introduction: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsGlowing(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2">
        <div className="grid grid-cols-7 grid-rows-3 gap-2">
          {Array.from({ length: 21 }).map((_, index) => (
            <div
              key={index}
              className={`
                aspect-[2/3.6] rounded-md border border-gray-300
                transition-all duration-300 ease-in relative
                ${isVisible ? "opacity-100" : "opacity-0"}
                ${isGlowing ? "animate-cardGlow" : ""}
                hover:border-gray-400 hover:shadow-lg
              `}
              style={{
                transitionDelay: `${(index * 2000) / 21}ms`,
                animationDelay: `${(index * 3000) / 21}ms`,
              }}
            >
              <Image
                src={`/22/assets/cards/rws/${(index + 1)
                  .toString()
                  .padStart(2, "0")}.webp`}
                alt={`Tarot card ${index + 1}`}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
