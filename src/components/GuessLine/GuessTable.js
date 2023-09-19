import React from "react";
import GuessLine from "../Letter";

function GuessTable({ attempts, maxGuess, wordSize }) {
  return (
    <div className="guess-results">
      {attempts.map((attempt, index) => (
        <GuessLine key={index} attempt={attempt} />
      ))}

      {attempts.length <= maxGuess &&
        [...Array(maxGuess - attempts.length).keys()].map((_, index) => (
          <p key={index} className="guess">
            {[...Array(wordSize).keys()].map((_, index) => (
              <span key={index} className="cell">
                {" "}
              </span>
            ))}
          </p>
        ))}
    </div>
  );
}

export default GuessTable;
