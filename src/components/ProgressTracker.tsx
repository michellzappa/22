"use client";

interface ProgressTrackerProps {
  currentIndex: number;
  totalSlides: number;
}

export default function ProgressTracker({
  currentIndex,
  totalSlides,
}: ProgressTrackerProps) {
  return (
    <div className="w-full h-1 bg-[#F5F5F5]/10 mb-6 relative">
      <div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#F5F5F5] rounded-full"
        style={{
          left: `${(currentIndex / (totalSlides - 1)) * 100}%`,
          transition: "left 0.3s ease-in-out",
        }}
      />
    </div>
  );
}
