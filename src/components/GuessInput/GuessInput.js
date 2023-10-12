import React from "react";
import { Status } from "../Banner/Banner";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tempGuess, setTempGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(tempGuess);
    setTempGuess("");
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus === Status.WON || gameStatus === Status.LOST}
        required
        id="guess-input"
        type="text"
        value={tempGuess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setTempGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
