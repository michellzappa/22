"use client";
import SlideLayout from "@/components/SlideLayout";
import AlchemicalSymbol from "@/components/AlchemicalSymbol";
import Image from "next/image";
import { useDeckPreference } from "@/hooks/useDeckPreference";

interface CardPageClientProps {
  card: {
    id: number;
    title: string;
    description: string;
    keywords: string[];
    symbol: {
      type: string;
      name: string;
    };
  };
}

export default function CardPageClient({ card }: CardPageClientProps) {
  const { currentDeck } = useDeckPreference();
  const paddedId = String(card.id).padStart(2, "0");

  return (
    <SlideLayout currentPath={`/card/${card.id}`}>
      <div className="relative h-full">
        <div className="absolute top-0 right-0 text-[#F5F5F5]/60 text-sm">
          {card.id}/22
        </div>

        <div className="flex gap-6 mb-6">
          <div className="relative w-[150px] h-[260px]">
            <Image
              src={`/assets/cards/${currentDeck}/${paddedId}.webp`}
              alt={card.title}
              sizes="150px"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              }}
              className="rounded-lg"
              fill
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
            <p className="text-xl mb-6">{card.description}</p>
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
