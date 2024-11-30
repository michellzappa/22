import { notFound } from "next/navigation";
import SlideLayout from "@/components/SlideLayout";
import slidesData from "@/data/slides.json";
import CardPageClient from "@/components/CardPageClient";
import dynamic from "next/dynamic";

interface CardMetadata {
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
}

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
    if (!slide.metadata) {
      content = <div>Card metadata not found</div>;
    } else if (!isValidSymbolType(slide.metadata.symbol.type)) {
      content = <div>Invalid card symbol type</div>;
    } else {
      content = <CardPageClient card={slide.metadata as CardMetadata} />;
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
