import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guess={validatedGuesses[index]}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
