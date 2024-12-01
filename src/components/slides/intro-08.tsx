import { FC } from "react";
import Image from "next/image";

const foolCards = [
  {
    src: "/22/slides/08/1440-cary-visconti.webp",
    year: "1440",
    name: "Cary Visconti",
  },
  {
    src: "/22/slides/08/1450-visconti-sforza.webp",
    year: "1450",
    name: "Visconti-Sforza",
  },
  {
    src: "/22/slides/08/1736-marseille.webp",
    year: "1736",
    name: "Marseille",
  },
  {
    src: "/22/slides/08/1830-epinal.webp",
    year: "1830",
    name: "Epinal",
  },
  {
    src: "/22/slides/08/1901-saint-germain.webp",
    year: "1901",
    name: "Saint-Germain",
  },
  {
    src: "/22/slides/08/1909-rider-waite-smith.webp",
    year: "1909",
    name: "Rider Waite Smith",
  },
  {
    src: "/22/slides/08/1909-papus.webp",
    year: "1909",
    name: "Papus",
  },
  {
    src: "/22/slides/08/1929-knapp-hall.webp",
    year: "1929",
    name: "Knapp-Hall",
  },
  {
    src: "/22/slides/08/1969-thoth.webp",
    year: "1969",
    name: "Thoth",
  },
  {
    src: "/22/slides/08/1979-morgan-greer.webp",
    year: "1979",
    name: "Morgan-Greer",
  },
  {
    src: "/22/slides/08/1979-hermetic.webp",
    year: "1979",
    name: "Hermetic",
  },
  {
    src: "/22/slides/08/1981-hermes-thot.webp",
    year: "1981",
    name: "Hermes-Thot",
  },
  {
    src: "/22/slides/08/1986-barbara-walker.webp",
    year: "1986",
    name: "Barbara Walker",
  },
  {
    src: "/22/slides/08/1995-alchemical.webp",
    year: "1995",
    name: "Alchemical",
  },
  {
    src: "/22/slides/08/2001-sephiroth.webp",
    year: "2001",
    name: "Sephiroth",
  },
  {
    src: "/22/slides/08/2010-golden-dawn.webp",
    year: "2010",
    name: "Golden Dawn",
  },
  {
    src: "/22/slides/08/2011-holy-light.webp",
    year: "2011",
    name: "Holy Light",
  },
  {
    src: "/22/slides/08/2011-silicon-dawn.webp",
    year: "2011",
    name: "Silicon Dawn",
  },
];

// Split the cards into two rows
const firstRow = foolCards.slice(0, 9); // First 9 cards (1440-1969)
const secondRow = foolCards.slice(9); // Remaining 9 cards (1979-2011)

const Introduction: FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {/* First Row */}
        <div className="grid grid-cols-9 gap-2">
          {firstRow.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[11/20] bg-black/5 rounded overflow-hidden">
                <Image
                  src={card.src}
                  alt={`${card.name} Fool Card (${card.year})`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-1">
                <div className="font-medium text-xs whitespace-nowrap">
                  {card.name}
                </div>
                <div className="text-xs text-gray-600">{card.year}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-9 gap-2">
          {secondRow.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[11/20] bg-black/5 rounded overflow-hidden">
                <Image
                  src={card.src}
                  alt={`${card.name} Fool Card (${card.year})`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="text-center mt-1">
                <div className="font-medium text-xs whitespace-nowrap">
                  {card.name}
                </div>
                <div className="text-xs text-gray-600">{card.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
