import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  guesses,
  setGuesses,
  answer,
  setGameStatus,
  gameStatus,
}) {
  const [guess, setGuess] = React.useState("");

  const handleInput = (event) => {
    event.preventDefault();
    if (guess.length < 1) return;
    const nextGuesses = [...guesses, guess];
    checkGameStatus(nextGuesses);
    setGuesses(nextGuesses);
    setGuess("");
  };

  const checkGameStatus = (guesses) => {
    if (guess === answer) {
      setGameStatus("won");
    }
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <form
      onSubmit={(event) => handleInput(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus === "won" || gameStatus === "lost"}
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
