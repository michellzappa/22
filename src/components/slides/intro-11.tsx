"use client";

import { FC } from "react";

const Introduction: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-1/2">
        {/* Path of transformation header */}
        <div className="absolute -top-8 left-0 text-xl font-lora whitespace-nowrap">
          Path of transformation →
        </div>

        {/* Row labels */}
        <div className="absolute left-0 top-0 bottom-0 -translate-x-12 flex flex-col justify-between text-xl font-lora">
          <div className="translate-y-[20%]">Mind</div>
          <div>Body</div>
          <div className="-translate-y-[20%]">Spirit</div>
        </div>

        {/* Right side label */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 text-xl font-lora whitespace-nowrap">
          3 Worlds
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16 text-xl font-lora whitespace-nowrap">
          7 Dimensions
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-7 grid-rows-3 gap-2">
          {Array.from({ length: 21 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[2/3.6] rounded-lg border-2 border-gray-400/30 hover:border-gray-400 hover:shadow-lg relative"
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center text-xl font-lora">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bracket for 3 Worlds */}
        <div className="absolute right-0 top-0 bottom-0 translate-x-8 w-3 border-2 border-gray-400/30 border-l-0 rounded-r-lg" />

        {/* Bracket for 7 Dimensions */}
        <div className="absolute -bottom-8 left-0 right-0 h-3 border-2 border-gray-400/30 border-t-0 rounded-b-lg" />
      </div>
    </div>
  );
};

export default Introduction;
