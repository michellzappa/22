"use client";

import React, { useState, useEffect, useMemo } from "react";

const FlowerOfLife = ({ autoReplay = false }) => {
  const radius = 40;
  const rings = 6;
  const size = (rings + 1) * radius * 2;
  const center = size / 2;

  // Use a ref to track mounted state instead of useState
  const hasMounted = React.useRef(false);
  const [currentRing, setCurrentRing] = useState(-1);

  // Generate circle positions with ring information
  const circles = useMemo(() => {
    const result = [];
    const angleStep = Math.PI / 3;

    // Ensure consistent precision for all calculations
    const roundTo4 = (num: number) => Number(num.toFixed(4));

    // Center circle (ring 0)
    result.push({ cx: roundTo4(center), cy: roundTo4(center), ring: 0 });

    // Generate circles for each ring
    for (let ring = 1; ring <= rings; ring++) {
      for (let i = 0; i < 6; i++) {
        const angle = i * angleStep;
        const x = roundTo4(center + ring * radius * Math.cos(angle));
        const y = roundTo4(center + ring * radius * Math.sin(angle));
        result.push({ cx: x, cy: y, ring });

        // Add intermediate circles
        if (ring > 1) {
          for (let j = 1; j < ring; j++) {
            const interX = roundTo4(
              center +
                radius *
                  (j * Math.cos(angle) +
                    (ring - j) * Math.cos(angle + angleStep))
            );
            const interY = roundTo4(
              center +
                radius *
                  (j * Math.sin(angle) +
                    (ring - j) * Math.sin(angle + angleStep))
            );
            result.push({ cx: interX, cy: interY, ring });
          }
        }
      }
    }

    return result;
  }, [center, radius, rings]);

  // Handle mounting and animation
  useEffect(() => {
    hasMounted.current = true;

    if (currentRing < rings) {
      const timer = setTimeout(() => {
        setCurrentRing((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else if (autoReplay && currentRing >= rings) {
      const resetTimer = setTimeout(() => {
        setCurrentRing(-1);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentRing, rings, autoReplay]);

  // Calculate opacity based on ring number and animation state
  const getOpacity = (ring: number) => {
    if (!hasMounted.current || ring > currentRing) return 0;
    const baseOpacity = Math.max(0.1, 0.9 - ring * 0.15);
    return baseOpacity;
  };

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-96 h-96">
      {circles.map((circle, index) => (
        <circle
          key={index}
          cx={circle.cx}
          cy={circle.cy}
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity={getOpacity(circle.ring)}
          className="transition-opacity duration-500 ease-in"
        />
      ))}
    </svg>
  );
};

export default FlowerOfLife;
