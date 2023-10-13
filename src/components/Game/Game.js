import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner, { Status } from "../Banner/Banner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [gameStatus, setGameStatus] = React.useState(Status.RUNNING);
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const getEmojiResults = (validatedGuesses) => {
    let result = `Wordle: ${validatedGuesses.length}/${NUM_OF_GUESSES_ALLOWED}\n`;

    validatedGuesses.forEach((guess) => {
      let guessResult = "";
      guess.forEach((letter) => {
        switch (letter.status) {
          case "incorrect":
            guessResult += "⬛";
            break;
          case "misplaced":
            guessResult += "🟨";
            break;
          case "correct":
            guessResult += "🟩";
            break;
          default:
            console.log("Something went wrong with logging results!");
        }
      });
      result += `${guessResult}\n`;
    });
    return result;
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  console.info({ answer });

  const handleSubmitGuess = (tempGuess) => {
    const nextGuesses = [...guesses, tempGuess];
    setGuesses(nextGuesses);
    if (tempGuess === answer) {
      setGameStatus(Status.WON);
    } else if (nextGuesses >= NUM_OF_GUESSES_ALLOWED)
      setGameStatus(Status.LOST);
  };

  const resetGame = () => {
    setGuesses([]);
    setGameStatus(Status.RUNNING);
    setShowSnackbar(false);
    setAnswer(() => sample(WORDS));
  };

  function PlayAgainButton() {
    return (
      <button className="button play-again" onClick={resetGame}>
        Play again
      </button>
    );
  }

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
            {guesses.length === 1 ? "guess" : "guesses"}.{" "}
            <button
              onClick={() => {
                setShowSnackbar(true);
                navigator.clipboard.writeText(
                  getEmojiResults(validatedGuesses)
                );
              }}
              className="button"
            >
              Share
            </button>
            <PlayAgainButton></PlayAgainButton>
          </Banner>
        )}
        {gameStatus === Status.LOST && (
          <Banner status="sad">
            Sorry, the correct answer was
            <strong> {answer}.</strong>
            <PlayAgainButton></PlayAgainButton>
          </Banner>
        )}
      </div>
      {showSnackbar && (
        <div onClick={() => setShowSnackbar(false)} className="snackbar show">
          Your results have been copied to the clipboard! ❌
        </div>
      )}
    </>
  );
}

export default Game;
