import { GeometricPattern } from "../GeometricPattern";

const IntroSlide01: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-background text-foreground">
      <div className="max-w-[90%] w-full space-y-4 text-center">
        <div className="w-2/5 mx-auto my-2">
          <GeometricPattern />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl text-gray-400 font-light tracking-wide">
            Personal development through Tarot & Jungian archetypes.
          </h2>
        </div>

        <div className="text-xl text-gray-500">
          <p>
            Michell Zappa –{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
            }).format(new Date())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide01;
