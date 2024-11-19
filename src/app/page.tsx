"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        router.push("/intro/1");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#F5F5F5]">
          Welcome to the Slideshow
        </h1>
        <Link
          href="/intro/1"
          className="text-xl bg-[#2A2A2A] text-[#F5F5F5] px-6 py-3 rounded-lg hover:bg-[#3A3A3A] transition-colors"
        >
          Start Presentation
        </Link>
      </div>
    </div>
  );
}
