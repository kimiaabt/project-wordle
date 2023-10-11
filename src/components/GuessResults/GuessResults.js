import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results &&
        results.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;
