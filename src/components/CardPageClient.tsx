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
  showTitle?: boolean;
}

export default function CardPageClient({
  card,
  showTitle = true,
}: CardPageClientProps) {
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
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <div className="absolute top-0 left-0 w-full h-full border border-white">
          <div className="w-full h-full flex flex-col p-8">
            {showTitle && (
              <h1 className="text-4xl font-bold mb-4 text-center">
                {card.title}
              </h1>
            )}

            {/* Main content area */}
            <div className="flex-1 flex justify-between gap-12">
              {/* Left column */}
              <div className="flex-1">
                <p className="text-xl text-[#F5F5F5]/80">{card.description}</p>
              </div>

              {/* Center column - Card Image */}
              <div className="relative w-[196px] h-[342px] flex-shrink-0">
                <Image
                  src={`/22/assets/cards/${currentDeck}/${paddedId}.webp`}
                  alt={card.title}
                  sizes="196px"
                  style={{
                    objectFit: "contain",
                  }}
                  className="rounded-lg transition-opacity duration-300"
                  fill
                  priority
                />
              </div>

              {/* Right column */}
              <div className="flex-1">
                {card.journey && (
                  <ul className="list-disc list-outside space-y-2 ml-5">
                    {card.journey.map((step, index) => (
                      <li key={index} className="text-lg text-[#F5F5F5]/80">
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Footer section */}
            <div className="mt-6">
              {/* Keywords */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {card.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5F5F5]/10 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Bottom elements */}
              <div className="flex justify-between items-center">
                <div className="text-[#F5F5F5]/60 text-sm">{card.id}/21</div>
                <AlchemicalSymbol
                  type={card.symbol.type}
                  name={card.symbol.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
