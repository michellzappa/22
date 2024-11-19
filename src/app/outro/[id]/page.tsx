import SlideLayout from "@/components/SlideLayout";

interface OutroPageProps {
  params: {
    id: string;
  };
}

export default function OutroPage({ params }: OutroPageProps) {
  const outroContent = {
    "1": {
      title: "Thank You",
      content: "Thanks for viewing our presentation",
    },
    "2": {
      title: "Questions?",
      content: "Feel free to reach out with any questions",
    },
  };

  const slide = outroContent[params.id as keyof typeof outroContent];

  return (
    <SlideLayout currentPath={`/outro/${params.id}`}>
      <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
      <p className="text-xl">{slide.content}</p>
    </SlideLayout>
  );
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}
