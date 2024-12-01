"use client";

import { FC, useEffect, useState } from "react";

const Introduction: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Start the glow effect after all cards have appeared (2000ms + buffer)
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
                aspect-[2/3.6] rounded-lg border-2 border-gray-300
                transition-all duration-300 ease-in
                ${isVisible ? "opacity-100" : "opacity-0"}
                ${isGlowing ? "animate-cardGlow" : ""}
                hover:border-gray-400 hover:shadow-lg
              `}
              style={{
                transitionDelay: `${(index * 2000) / 21}ms`,
                animationDelay: `${(index * 3000) / 21}ms`,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
