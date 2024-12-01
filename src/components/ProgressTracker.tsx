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
    <div className="w-full flex justify-center items-center gap-3 mb-6 pt-8">
      {Array.from({ length: totalSlides }, (_, index) => (
        <div
          key={index}
          className={`w-2 aspect-square rounded-full transition-opacity duration-300 ${
            index === currentIndex
              ? "bg-[#F5F5F5] opacity-100"
              : "bg-[#F5F5F5] opacity-20"
          }`}
        />
      ))}
    </div>
  );
}
