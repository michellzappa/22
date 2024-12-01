"use client";

import { ReactNode } from "react";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";

interface SlideLayoutProps {
  children: ReactNode;
  currentPath: string;
}

export default function SlideLayout({
  children,
  currentPath,
}: SlideLayoutProps) {
  useKeyboardNavigation(currentPath);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <div className="w-full max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
