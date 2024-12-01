import { FC } from "react";

const Introduction: FC = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/22/slides/outro-08.webp")' }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-[42px] font-serif font-bold -mb-4">
          As Above So Below
        </div>
        <div className="text-black text-[42px] font-serif font-bold transform rotate-180 -mt-4">
          As Below So Above
        </div>
      </div>
    </div>
  );
};

export default Introduction;
