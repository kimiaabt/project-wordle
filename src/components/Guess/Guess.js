import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const checkedGuess = guess ? checkGuess(guess, answer) : undefined;

  return (
    <>
      <p className="guess">
        {range(5).map((index) => (
          <span
            key={index}
            className={`cell ${checkedGuess && checkedGuess[index].status}`}
          >
            {guess ? checkedGuess[index].letter : ""}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
