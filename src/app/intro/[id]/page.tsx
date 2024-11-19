import SlideLayout from "@/components/SlideLayout";

interface IntroPageProps {
  params: {
    id: string;
  };
}

export default function IntroPage({ params }: IntroPageProps) {
  const introContent = {
    "1": {
      title: "Introduction",
      content: "Welcome to our presentation",
    },
    "2": {
      title: "Overview",
      content: "What we'll cover today",
    },
    "3": {
      title: "Getting Started",
      content: "Let's begin...",
    },
  };

  const slide = introContent[params.id as keyof typeof introContent];

  // The content is prepared on the server
  const slideContent = (
    <>
      <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
      <p className="text-xl">{slide.content}</p>
    </>
  );

  // SlideLayout is a client component that wraps the server-rendered content
  return (
    <SlideLayout currentPath={`/intro/${params.id}`}>
      {slideContent}
    </SlideLayout>
  );
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
