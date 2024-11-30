"use client";
import SlideLayout from "@/components/SlideLayout";
import AlchemicalSymbol from "@/components/AlchemicalSymbol";
import Image from "next/image";
import { useDeckPreference } from "@/hooks/useDeckPreference";
import { useEffect } from "react";

interface CardPageClientProps {
  card: {
    id: number;
    title: string;
    description: string;
    keywords: string[];
    symbol: {
      type: "element" | "planet" | "zodiac";
      name: string;
    };
    characteristics?: string[];
    journey: string[];
  };
}

export default function CardPageClient({ card }: CardPageClientProps) {
  const { currentDeck } = useDeckPreference();
  const paddedId = String(card.id).padStart(2, "0");

  // Preload both deck images
  useEffect(() => {
    const preloadImage = (deck: string) => {
      const img = document.createElement("img");
      img.src = `/22/assets/cards/${deck}/${paddedId}.webp`;
    };

    preloadImage("rws");
    preloadImage("gptarot");
  }, [paddedId]);

  return (
    <SlideLayout currentPath={`/card/${card.id}`}>
      <div className="relative h-full">
        <div className="absolute top-0 right-0 text-[#F5F5F5]/60 text-sm">
          {card.id}/21
        </div>

        <div className="flex gap-6 mb-6">
          <div className="relative w-[200px] h-[348px] flex-shrink-0">
            <Image
              src={`/22/assets/cards/${currentDeck}/${paddedId}.webp`}
              alt={card.title}
              sizes="200px"
              style={{
                objectFit: "contain",
              }}
              className="rounded-lg transition-opacity duration-300"
              fill
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
            <p className="text-xl mb-6">{card.description}</p>
            {card.journey && (
              <ul className="list-disc list-inside mb-6 space-y-2">
                {card.journey.map((step, index) => (
                  <li key={index} className="text-lg text-[#F5F5F5]/80">
                    {step}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {card.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F5F5F5]/10 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 right-0">
          <AlchemicalSymbol type={card.symbol.type} name={card.symbol.name} />
        </div>
      </div>
    </SlideLayout>
  );
}
