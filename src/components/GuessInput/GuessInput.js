import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  const handleInput = (event) => {
    event.preventDefault();
    if (guess.length < 1 || guesses.length === NUM_OF_GUESSES_ALLOWED) return;
    setGuesses([...guesses, guess]);
    setGuess("");
  };

  return (
    <form
      onSubmit={(event) => handleInput(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
