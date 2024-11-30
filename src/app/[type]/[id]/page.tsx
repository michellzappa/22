import { notFound } from "next/navigation";
import SlideLayout from "@/components/SlideLayout";
import slidesData from "@/data/slides.json";
import CardPageClient from "@/components/CardPageClient";
import dynamic from "next/dynamic";

interface SlidePageProps {
  params: {
    type: string;
    id: string;
  };
}

function isValidSymbolType(
  type: string
): type is "element" | "planet" | "zodiac" {
  return ["element", "planet", "zodiac"].includes(type);
}

export default async function SlidePage({ params }: SlidePageProps) {
  const slideId = `${params.type}-${params.id}`;
  const slide = slidesData.slides.find((s) => s.id === slideId);

  if (!slide) {
    notFound();
  }

  let content;
  if (slide.type === "card") {
    const cardData = await import("@/data/cards.json");
    const card = cardData.cards.find((c) => c.id === slide.cardId);

    if (!card) {
      content = <div>Card not found</div>;
    } else {
      if (isValidSymbolType(card.symbol.type)) {
        content = <CardPageClient card={card} />;
      } else {
        content = <div>Invalid card symbol type</div>;
      }
    }
  } else {
    const SlideComponent = dynamic(() =>
      import(`@/components/slides/${slide.component}-${slide.type}.tsx`).then(
        (mod) => mod.default
      )
    );
    content = (
      <>
        <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
        <SlideComponent />
      </>
    );
  }

  return (
    <SlideLayout currentPath={`/${params.type}/${params.id}`}>
      {content}
    </SlideLayout>
  );
}

export function generateStaticParams() {
  return slidesData.slides.map((slide) => {
    const [type, id] = slide.id.split("-");
    return { type, id };
  });
}
