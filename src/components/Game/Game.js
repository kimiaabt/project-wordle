import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner, { Status } from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [gameStatus, setGameStatus] = React.useState(Status.RUNNING);
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  console.info({ answer });

  const handleSubmitGuess = (tempGuess) => {
    const nextGuesses = [...guesses, tempGuess];
    setGuesses(nextGuesses);
    if (tempGuess === answer) setGameStatus(Status.WON);
    else if (nextGuesses >= NUM_OF_GUESSES_ALLOWED) setGameStatus(Status.LOST);
  };

  return (
    <>
      <div className="game-wrapper">
        <GuessResults validatedGuesses={validatedGuesses} />
        <GuessInput
          handleSubmitGuess={handleSubmitGuess}
          gameStatus={gameStatus}
          validatedGuesses={validatedGuesses}
        />

        {gameStatus === Status.WON && (
          <Banner status="happy">
            <strong>Congratulations! </strong>
            You got it in {guesses.length}{" "}
            {guesses.length === 1 ? "guess" : "guesses"}.
          </Banner>
        )}
        {gameStatus === Status.LOST && (
          <Banner status="sad">
            Sorry, the correct answer was
            <strong> {answer}.</strong>
          </Banner>
        )}
      </div>
    </>
  );
}

export default Game;
