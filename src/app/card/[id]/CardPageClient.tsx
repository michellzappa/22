"use client";
import { notFound } from "next/navigation";
import SlideLayout from "@/components/SlideLayout";
import AlchemicalSymbol from "@/components/AlchemicalSymbol";
import cardsData from "@/data/cards.json";
import Image from "next/image";
import { useDeckPreference } from "@/hooks/useDeckPreference";
import { useEffect } from "react";

interface CardPageProps {
  params: {
    id: string;
  };
}

export default function CardPageClient({ params }: CardPageProps) {
  if (!params?.id) {
    notFound();
  }

  const cardId = params.id.toString();
  const card = cardsData.cards.find((c) => c.id === parseInt(cardId));
  const totalCards = cardsData.cards.length;
  const paddedId = cardId.padStart(2, "0");
  const { currentDeck, toggleDeck } = useDeckPreference();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        toggleDeck();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleDeck]);

  if (!card) {
    notFound();
  }

  return (
    <SlideLayout currentPath={`/card/${params.id}`}>
      <div className="relative h-full">
        <div className="absolute top-0 right-0 text-[#F5F5F5]/60 text-sm">
          {parseInt(cardId) + 1}/{totalCards}
        </div>

        <div className="flex gap-6 mb-6">
          <Image
            src={`/assets/cards/${currentDeck}/${paddedId}.webp`}
            alt={card.title}
            width={150}
            height={260}
            className="rounded-lg"
          />
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
