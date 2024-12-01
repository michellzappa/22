import React from "react";

export const GeometricPattern: React.FC = () => {
  const colors = [
    "#750202", // red
    "#ED8236", // orange
    "#FFB925", // yellow
    "#3C802D", // green
    "#42C2C3", // turquoise
    "#135695", // blue
    "#591F76", // purple
  ];

  return (
    <div className="w-full aspect-square relative">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(200, 200) scale(1.5)">
          {colors.map((color, i) => {
            const rotation = (i * 360) / 7;
            return (
              <polygon
                key={i}
                points="0,-104 90,52 -90,52"
                fill={color}
                fillOpacity={0.5}
                stroke="black"
                strokeWidth="0.5"
                transform={`rotate(${rotation})`}
                className="transform-origin-center"
              />
            );
          })}
          <circle cx="0" cy="0" r="52" fill="black" />
        </g>
      </svg>
    </div>
  );
};
