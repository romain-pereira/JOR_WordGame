import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EndGameBanner({ isWin, attemptsCount, answer }) {
  return (
    <>
      {isWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {attemptsCount} guesses</strong>.
          </p>
        </div>
      )}
      {attemptsCount === NUM_OF_GUESSES_ALLOWED && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default EndGameBanner;
