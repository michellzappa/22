import { FC } from "react";

const Introduction: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">TAROT</h3>
        <ul className="space-y-3">
          <li>
            <strong>Arcana:</strong>{" "}
            <em>Latin word meaning "secrets" or "mysteries".</em>
          </li>
          <li>
            <strong>Major Arcana:</strong>{" "}
            <em>
              22 cards representing major life themes and archetypal energies.
            </em>
          </li>
          <li>
            <strong>Minor Arcana:</strong>{" "}
            <em>
              56 cards divided into four suits representing smaller issues.
            </em>
          </li>
          <li>
            <strong>The Fool's Journey:</strong>{" "}
            <em>
              Metaphorical path through the Major Arcana, representing spiritual
              and psychological development.
            </em>
          </li>
          <li>
            <strong>Rider-Waite-Smith:</strong>{" "}
            <em>
              The most widely recognized Tarot deck, created by Arthur Edward
              Waite and Pamela Colman Smith.
            </em>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">PSYCHOLOGY</h3>
        <ul className="space-y-3">
          <li>
            <strong>Archetype:</strong>{" "}
            <em>
              Universal, primal symbols and patterns in the collective
              unconscious.
            </em>
          </li>
          <li>
            <strong>Collective Unconscious:</strong>{" "}
            <em>
              Jung's concept of the shared, inherited part of the unconscious
              mind.
            </em>
          </li>
          <li>
            <strong>Individuation:</strong>{" "}
            <em>
              The process of becoming one's true self through psychological
              integration.
            </em>
          </li>
          <li>
            <strong>Shadow:</strong>{" "}
            <em>The unconscious or repressed aspects of the personality.</em>
          </li>
          <li>
            <strong>Anima/Animus:</strong>{" "}
            <em>The feminine aspect in men/masculine aspect in women.</em>
          </li>
          <li>
            <strong>Projection:</strong>{" "}
            <em>
              Attributing one's own feelings or traits to others or external
              objects.
            </em>
          </li>
          <li>
            <strong>Synchronicity:</strong>{" "}
            <em>Meaningful coincidences that serve as guidance or insight.</em>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">HERO'S JOURNEY</h3>
        <ul className="space-y-3">
          <li>
            <strong>Monomyth:</strong>{" "}
            <em>Campbell's term for the universal hero's journey pattern.</em>
          </li>
          <li>
            <strong>Call to Adventure:</strong>{" "}
            <em>The beginning of the hero's journey.</em>
          </li>
          <li>
            <strong>Threshold:</strong>{" "}
            <em>Boundary between known and unknown.</em>
          </li>
          <li>
            <strong>Mentor:</strong> <em>Guide figure who aids the hero</em>
          </li>
          <li>
            <strong>Abyss:</strong>{" "}
            <em>The point of greatest challenge or transformation.</em>
          </li>
          <li>
            <strong>Return:</strong>{" "}
            <em>The integration of lessons learned into everyday life.</em>
          </li>
          <li>
            <strong>Apotheosis:</strong>{" "}
            <em>The point of highest realization or achievement.</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
