import { FC } from "react";

const Bibliography: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ul className="space-y-4 text-center">
        <li>
          <div className="text-xl">
            <a
              href="https://bookshop.org/books/seventy-eight-degrees-of-wisdom-a-tarot-journey-to-self-awareness-a-new-edition-of-the-tarot-classic/9781578636655"
              className="hover:text-blue-400 transition-colors border-b border-white"
            >
              78 Degrees of Wisdom
            </a>{" "}
            <span className="text-gray-400">(1980)</span>
          </div>
          <div className="text-lg text-gray-300">Rachel Pollack</div>
        </li>
        <li>
          <div className="text-xl">
            <a
              href="https://bookshop.org/p/books/man-and-his-symbols-carl-g-jung/18792634"
              className="hover:text-blue-400 transition-colors border-b border-white"
            >
              Man and His Symbols
            </a>{" "}
            <span className="text-gray-400">(1964)</span>
          </div>
          <div className="text-lg text-gray-300">Carl Jung</div>
        </li>
        <li>
          <div className="text-xl">
            <a
              href="https://bookshop.org/p/books/the-hero-with-a-thousand-faces-joseph-campbell/6894600"
              className="hover:text-blue-400 transition-colors border-b border-white"
            >
              The Hero with a Thousand Faces
            </a>{" "}
            <span className="text-gray-400">(1949)</span>
          </div>
          <div className="text-lg text-gray-300">Carl Jung</div>
        </li>
        <li>
          <div className="text-xl">
            <a
              href="https://bookshop.org/p/books/tarot-and-the-archetypal-journey-the-jungian-path-from-darkness-to-light-sallie-nichols/6897625"
              className="hover:text-blue-400 transition-colors border-b border-white"
            >
              Tarot and the Archetypal Journey
            </a>{" "}
            <span className="text-gray-400">(1980)</span>
          </div>
          <div className="text-lg text-gray-300">Sallie Nichols</div>
        </li>
        <li>
          <div className="text-xl">
            <a
              href="https://bookshop.org/p/books/the-secret-teachings-of-all-ages-manly-p-hall/16683170"
              className="hover:text-blue-400 transition-colors border-b border-white"
            >
              The Secret Teachings of all Ages
            </a>{" "}
            <span className="text-gray-400">(1928)</span>
          </div>
          <div className="text-lg text-gray-300">Manly P. Hall</div>
        </li>
      </ul>
    </div>
  );
};

export default Bibliography;
