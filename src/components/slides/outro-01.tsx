"use client";

import { FC } from "react";

const Introduction: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2 relative aspect-square">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="-1000 -1000 2000 2000"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="0"
            cy="0"
            r="720"
            fill="none"
            stroke="white"
            strokeWidth="8"
          />
        </svg>
      </div>
    </div>
  );
};

export default Introduction;
