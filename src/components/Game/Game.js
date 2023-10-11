import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState(["running"]);
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && (
        <Banner status="happy">
          <strong>Congratulations! </strong>
          You got it in {guesses.length}{" "}
          {guesses.length === 1 ? "guess" : "guesses"}.
        </Banner>
      )}
      {gameStatus === "lost" && (
        <Banner status="sad">
          Sorry, the correct answer was
          <strong> {answer}.</strong>
        </Banner>
      )}
    </>
  );
}

export default Game;
