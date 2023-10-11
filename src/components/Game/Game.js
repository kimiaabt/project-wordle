import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner, { Status } from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState(Status.RUNNING);
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
      {gameStatus === Status.WON && (
        <GameOverBanner status="happy">
          <strong>Congratulations! </strong>
          You got it in {guesses.length}{" "}
          {guesses.length === 1 ? "guess" : "guesses"}.
        </GameOverBanner>
      )}
      {gameStatus === Status.LOST && (
        <GameOverBanner status="sad">
          Sorry, the correct answer was
          <strong> {answer}.</strong>
        </GameOverBanner>
      )}
    </>
  );
}

export default Game;
