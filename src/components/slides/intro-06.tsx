"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Intro06: FC = () => {
  const images = [
    "/22/slides/06-1.webp",
    "/22/slides/06-2.webp",
    "/22/slides/06-3.webp",
    "/22/slides/06-4.webp",
    "/22/slides/06-5.webp",
    "/22/slides/06-6.webp",
    "/22/slides/06-7.webp",
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center -mt-20">
      <div className="relative w-[90%] flex items-center justify-center">
        <div className="relative flex">
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              style={{
                marginLeft: index === 0 ? 0 : "-80px",
                transform: `translateY(${index % 2 === 0 ? "0px" : "120px"})`,
                zIndex: index,
              }}
            >
              <Image
                src={src}
                alt={`Movie poster ${index + 1}`}
                width={180}
                height={270}
                className="rounded-lg shadow-xl pointer-events-none"
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro06;
