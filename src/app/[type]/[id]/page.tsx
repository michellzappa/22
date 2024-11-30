import { notFound } from "next/navigation";
import SlideLayout from "@/components/SlideLayout";
import slidesData from "@/data/slides.json";
import CardPageClient from "@/components/CardPageClient";
import dynamic from "next/dynamic";
import ProgressTracker from "@/components/ProgressTracker";

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
  console.log("Rendering page with params:", params);

  const paddedId =
    params.type === "card"
      ? params.id
      : params.id.length === 1
      ? `0${params.id}`
      : params.id;
  const slideId = `${params.type}-${paddedId}`;
  console.log("Looking for slide with ID:", slideId);

  const slide = slidesData.slides.find((s) => s.id === slideId);
  console.log("Found slide:", slide);

  if (!slide) {
    console.log("Slide not found, returning 404");
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
    console.log("Loading dynamic component for slide:", slide.id);
    try {
      const SlideComponent = dynamic(
        () =>
          import(`@/components/slides/${slide.id}`)
            .then((mod) => {
              console.log("Module loaded successfully:", mod);
              return mod.default;
            })
            .catch((err) => {
              console.error("Error loading slide component:", err);
              return () => <div>Error loading slide content</div>;
            }),
        { ssr: true }
      );
      content = (
        <>
          <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
          <SlideComponent />
        </>
      );
    } catch (error) {
      console.error("Error in dynamic import:", error);
      content = <div>Error loading slide content</div>;
    }
  }

  const currentIndex = slidesData.slides.findIndex((s) => s.id === slideId);

  return (
    <SlideLayout currentPath={`/${params.type}/${params.id}`}>
      <ProgressTracker
        currentIndex={currentIndex}
        totalSlides={slidesData.slides.length}
      />
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
