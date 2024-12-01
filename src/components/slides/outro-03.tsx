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
          {/* Create an 8-pointed star using two overlapping squares */}
          <g>
            {/* First square */}
            <rect x="-600" y="-600" width="1200" height="1200" fill="white" />

            {/* Second square rotated 45 degrees */}
            <rect
              x="-600"
              y="-600"
              width="1200"
              height="1200"
              fill="white"
              transform="rotate(45)"
            />
          </g>

          {/* Center text */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="120"
            fill="black"
            fontWeight="bold"
          >
            <tspan x="0" y="-50">
              Person vs.
            </tspan>
          </text>

          {/* Surrounding text */}
          <text fontSize="100" fill="#333" fontWeight="medium">
            <textPath href="#circle" startOffset="0">
              Fate • Natural • Society • Self • Nature • Person • Technology •
              Crown •
            </textPath>
          </text>

          {/* Hidden circle path for text */}
          <circle
            id="circle"
            cx="0"
            cy="0"
            r="800"
            fill="none"
            style={{ display: "none" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Introduction;
