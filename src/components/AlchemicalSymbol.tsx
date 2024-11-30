"use client";

import { useEffect, useState } from "react";

interface AlchemicalSymbolProps {
  type: "zodiac" | "element" | "planet";
  name: string;
  className?: string;
}

export default function AlchemicalSymbol({
  type,
  name,
  className = "",
}: AlchemicalSymbolProps) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch(`/22/assets/symbols/${type}s/${name}.svg`)
      .then((res) => res.text())
      .then((svg) => {
        // Remove any existing fill attributes and add our class
        const cleanedSvg = svg
          .replace(/<svg/, '<svg class="fill-[#F5F5F5]"')
          .replace(/fill="[^"]*"/g, "");
        setSvgContent(cleanedSvg);
      })
      .catch((err) => console.error("Error loading symbol:", err));
  }, [type, name]);

  return (
    <div
      className={`w-6 h-6 opacity-40 ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
