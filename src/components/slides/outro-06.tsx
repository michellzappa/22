"use client";

import { FC } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Intro02: FC = () => {
  return (
    <div className="h-full w-full relative">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.6,
            bounce: 0.4,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/22/slides/outro-06.webp"
            alt="Reading Tarot"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Intro02;
