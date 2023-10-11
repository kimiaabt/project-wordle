import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results &&
        results.map(({ id, result }) => (
          <p key={id} className="guess">
            {result}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;
