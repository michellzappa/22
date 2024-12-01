"use client";

import { FC, useEffect, useState } from "react";

const Introduction: FC = () => {
  const [cardsHidden, setCardsHidden] = useState(false);
  const [showCircles, setShowCircles] = useState(false);

  useEffect(() => {
    // Start hiding cards immediately
    setCardsHidden(true);

    // After cards are hidden (1s), show circles
    const timer = setTimeout(() => {
      setShowCircles(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const generatePath = (index: number) => {
    const actualIndex = index + 1;

    // For the last shape (index 3), make it circular
    if (actualIndex === 4) {
      const size = 5808;
      const radius = size / 2;
      return `
        M ${-size / 2 + radius} ${-size / 2}
        L ${size / 2 - radius} ${-size / 2}
        Q ${size / 2} ${-size / 2} ${size / 2} ${-size / 2 + radius}
        L ${size / 2} ${size / 2 - radius}
        Q ${size / 2} ${size / 2} ${size / 2 - radius} ${size / 2}
        L ${-size / 2 + radius} ${size / 2}
        Q ${-size / 2} ${size / 2} ${-size / 2} ${size / 2 - radius}
        L ${-size / 2} ${-size / 2 + radius}
        Q ${-size / 2} ${-size / 2} ${-size / 2 + radius} ${-size / 2}
      `;
    }

    // For other shapes, keep rectangular progression
    const width = 800 + actualIndex * 1200;
    const height = 1440 + actualIndex * 1200;
    const radius =
      Math.min(width / 2, height / 2) * Math.pow((actualIndex + 1) / 4, 1.8);

    return `
      M ${-width / 2 + radius} ${-height / 2}
      L ${width / 2 - radius} ${-height / 2}
      Q ${width / 2} ${-height / 2} ${width / 2} ${-height / 2 + radius}
      L ${width / 2} ${height / 2 - radius}
      Q ${width / 2} ${height / 2} ${width / 2 - radius} ${height / 2}
      L ${-width / 2 + radius} ${height / 2}
      Q ${-width / 2} ${height / 2} ${-width / 2} ${height / 2 - radius}
      L ${-width / 2} ${-height / 2 + radius}
      Q ${-width / 2} ${-height / 2} ${-width / 2 + radius} ${-height / 2}
    `;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2 relative">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="-3000 -3000 6000 6000"
          preserveAspectRatio="xMidYMid meet"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <path
              key={`ring-${i}`}
              d={generatePath(i)}
              fill="none"
              stroke="white"
              strokeWidth="32"
              className={`
                transition-opacity duration-1000 ease-in-out
                ${showCircles ? "opacity-100" : "opacity-0"}
              `}
              style={{
                transitionDelay: `${i * 200}ms`,
              }}
            />
          ))}
        </svg>

        <div className="grid grid-cols-7 grid-rows-3 gap-2">
          {Array.from({ length: 21 }).map((_, index) => (
            <div
              key={index}
              className={`
                aspect-[2/3.6] rounded-lg border-2 border-gray-300
                transition-opacity duration-1000 ease-in-out
                ${
                  index === 10
                    ? "opacity-100"
                    : cardsHidden
                    ? "opacity-0"
                    : "opacity-100"
                }
                hover:border-gray-400 hover:shadow-lg
              `}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
