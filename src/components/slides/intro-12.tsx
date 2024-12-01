import { FC } from "react";

const Introduction: FC = () => {
  return (
    <div className="space-y-6 flex items-center justify-center h-full">
      <div className="relative w-1/3">
        {/* Labels */}
        <div className="absolute w-full h-full">
          {/* Top label */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-24 text-center">
            <div className="text-white font-bold text-2xl mb-2">MIND</div>
            <div className="text-white text-xl">Thoughts</div>
          </div>
          {/* Bottom left label */}
          <div className="absolute -left-24 bottom-0 text-center">
            <div className="text-white font-bold text-2xl mb-2">BODY</div>
            <div className="text-white text-xl">Actions</div>
          </div>
          {/* Bottom right label */}
          <div className="absolute -right-24 bottom-0 text-center">
            <div className="text-white font-bold text-2xl mb-2">SPIRIT</div>
            <div className="text-white text-xl">Feelings</div>
          </div>
        </div>

        {/* White outline triangle */}
        <div
          className="absolute inset-0 aspect-[1/0.866]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            backgroundColor: "white",
            transform: "scale(1.015)",
          }}
        />
        {/* Gray triangle */}
        <div
          className="relative aspect-[1/0.866]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            backgroundColor: "#808080",
          }}
        />
        {/* Inscribed black circle */}
        <div
          className="absolute"
          style={{
            width: "58%",
            aspectRatio: "1",
            backgroundColor: "black",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -25%)",
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
