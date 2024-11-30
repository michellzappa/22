"use client";

import { FC, useState } from "react";

const Introduction: FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const readTarotCard = () => {
    // Generate random number between 0 and 21 (inclusive)
    const randomCard = Math.floor(Math.random() * 22);
    setSelectedCard(randomCard);
  };

  return (
    <div className="space-y-6">
      <p className="text-xl">
        Welcome to our exploration of the Tarot's major arcana. This journey
        will take us through 22 cards that represent universal aspects of human
        experience.
      </p>
      <p className="text-xl">
        Each card tells a story, and together they form a complete narrative of
        psychological and spiritual development.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={readTarotCard}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Read a Tarot Card
        </button>

        {selectedCard !== null && (
          <p className="text-lg font-medium">
            Your card number is: {selectedCard.toString().padStart(2, "0")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Introduction;
