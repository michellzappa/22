import { FC } from "react";

const Introduction: FC = () => {
  // Helper function to generate points for a regular heptagon
  const generateHeptagonPoints = () => {
    const points = [];
    for (let i = 0; i < 7; i++) {
      const angle = (i * 2 * Math.PI) / 7 + Math.PI / 14; // Start from top
      const x = 50 + 50 * Math.cos(angle);
      const y = 50 + 50 * Math.sin(angle);
      points.push(`${x}% ${y}%`);
    }
    return points.join(", ");
  };

  const labels = [
    { text: "Action", angle: 0 },
    { text: "Potential", angle: 360 / 7 },
    { text: "Intuition", angle: (360 / 7) * 2 },
    { text: "Structure", angle: (360 / 7) * 3 },
    { text: "Shadow", angle: (360 / 7) * 4 },
    { text: "Guidance", angle: (360 / 7) * 5 },
    { text: "Choice", angle: (360 / 7) * 6 },
  ];

  return (
    <div className="space-y-6 flex items-center justify-center h-full">
      <div className="relative w-[30%] aspect-square">
        {/* Labels */}
        {labels.map((label, index) => (
          <div
            key={index}
            className="absolute whitespace-nowrap text-white text-xl font-bold"
            style={{
              left: "50%",
              top: "50%",
              transform: `
                rotate(${label.angle}deg) 
                translate(140px, 0) 
                rotate(-${label.angle}deg)
              `,
            }}
          >
            {label.text}
          </div>
        ))}

        {/* White outline heptagon */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `polygon(${generateHeptagonPoints()})`,
            backgroundColor: "white",
            transform: "scale(1.015)",
          }}
        />

        {/* Gray heptagon */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `polygon(${generateHeptagonPoints()})`,
            backgroundColor: "#808080",
          }}
        />

        {/* Center circle with arrow */}
        <div
          className="absolute rounded-full bg-black flex items-center justify-center"
          style={{
            width: "80%",
            aspectRatio: "1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-1/2 h-1/2 relative">
            <div
              className="absolute inset-0"
              style={{
                border: "2px solid white",
                borderRadius: "50%",
                borderLeftColor: "transparent",
                transform: "rotate(-45deg)",
              }}
            >
              <div
                className="absolute"
                style={{
                  width: "10px",
                  height: "10px",
                  borderTop: "2px solid white",
                  borderRight: "2px solid white",
                  transform: "rotate(45deg)",
                  right: "-1px",
                  top: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
