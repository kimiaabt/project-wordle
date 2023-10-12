import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getLetterStatus = (validatedGuesses) => {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
};

const handleEnterClick = (event, tempGuess, handleSubmit) => {
  if (tempGuess.length !== 5) return;

  handleSubmit(event);
};

const handleOnClick = (letter, tempGuess, setTempGuess) => {
  let nextTempGuess = "";
  if (tempGuess) nextTempGuess = tempGuess;

  nextTempGuess += letter;
  setTempGuess(nextTempGuess);
};

function Keyboard({ validatedGuesses, tempGuess, setTempGuess, handleSubmit }) {
  let letterStatus = getLetterStatus(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <button
              key={letter}
              className={`keyboard-letter ${letterStatus[letter] || ""} `}
              onClick={() => handleOnClick(letter, tempGuess, setTempGuess)}
            >
              {letter}
            </button>
          ))}
          {index === 2 && (
            <button
              onClick={(event) =>
                handleEnterClick(event, tempGuess, handleSubmit)
              }
              className="keyboard-letter enter"
            >
              ENTER
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
