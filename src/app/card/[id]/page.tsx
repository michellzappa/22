import { notFound } from "next/navigation";
import CardPageClient from "./CardPageClient";
import cardsData from "@/data/cards.json";

interface CardPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CardPage({ params }: CardPageProps) {
  const resolvedParams = await params;
  const cardId = Number(resolvedParams.id);

  // Valid cards are 0-21
  if (isNaN(cardId) || cardId < 0 || cardId > 21) {
    notFound();
  }

  const card = cardsData.cards.find((c) => c.id === cardId);
  if (!card) {
    notFound();
  }

  return <CardPageClient card={card} />;
}

export function generateStaticParams() {
  return Array.from({ length: 22 }, (_, i) => ({
    id: i.toString(),
  }));
}
