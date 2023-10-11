import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className={`cell ${guess && result[index].status}`}>
            {guess ? result[index].letter : ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
