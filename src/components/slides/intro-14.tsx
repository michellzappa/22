import { FC } from "react";
import { GeometricPattern } from "@/components/GeometricPattern";

const Introduction: FC = () => {
  return (
    <div className="space-y-6 flex items-center justify-center min-h-full">
      <div className="w-96">
        <GeometricPattern />
      </div>
    </div>
  );
};

export default Introduction;
