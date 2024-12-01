import { FC } from "react";
import Image from "next/image";

const Introduction: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src="/22/slides/outro-04.svg"
        alt="Tarot Journey"
        width={400}
        height={400}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Introduction;
