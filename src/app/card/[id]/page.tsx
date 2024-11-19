import { notFound } from "next/navigation";
import CardPageClient from "./CardPageClient";
import cardsData from "@/data/cards.json";

interface CardPageProps {
  params: {
    id: string;
  };
}

export default function CardPage(props: CardPageProps) {
  const cardId = Number(props.params.id);

  // Valid cards are 0-21
  if (isNaN(cardId) || cardId < 0 || cardId > 21) {
    notFound();
  }

  return <CardPageClient {...props} />;
}

export function generateStaticParams() {
  // Generate paths for cards 0-21
  return Array.from({ length: 22 }, (_, i) => ({
    id: i.toString(),
  }));
}
