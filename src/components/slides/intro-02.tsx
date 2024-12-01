import { FC } from "react";
import Image from "next/image";

const Introduction: FC = () => {
  return (
    <div className="h-full w-full relative">
      <Image
        src="/22/slides/02.webp"
        alt="The Tower (8 Dec 2021)"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Introduction;
