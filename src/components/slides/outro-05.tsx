import { FC } from "react";

const GeometricPatternStar: FC = () => {
  // Calculate points for a 7-sided polygon
  const getHeptagonPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i < 7; i++) {
      const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2; // Start from top
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  return (
    <div className="w-full aspect-square relative">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(200, 200) scale(1.5)">
          {/* Original triangles */}
          {Array.from({ length: 7 }).map((_, i) => {
            const rotation = (i * 360) / 7;
            return (
              <polygon
                key={`triangle-${i}`}
                points="0,-104 90,52 -90,52"
                fill="none"
                stroke="rgb(200, 200, 200)"
                strokeWidth="0.5"
                transform={`rotate(${rotation})`}
                className="transform-origin-center"
              />
            );
          })}

          {/* Three rotated heptagons */}
          {Array.from({ length: 3 }).map((_, i) => {
            const rotation = (i * 360) / 3;
            return (
              <polygon
                key={`heptagon-${i}`}
                points={getHeptagonPoints(104)}
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                transform={`rotate(${rotation})`}
              />
            );
          })}

          <circle
            cx="0"
            cy="0"
            r="52"
            stroke="rgb(200, 200, 200)"
            fill="none"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
};

const Introduction: FC = () => {
  return (
    <div className="space-y-6">
      <div className="w-1/2 mx-auto my-8">
        <GeometricPatternStar />
      </div>
    </div>
  );
};

export default Introduction;
