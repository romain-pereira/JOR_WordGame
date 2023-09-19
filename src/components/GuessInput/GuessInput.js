import React from "react";
import VisualKeyboard from "../VisualKeyboard";

function GuessInput({
  guess,
  setGuess,
  submitAttempt,
  answerSize,
  usedLetters,
  manuallyWriteLetter,
  manuallyDeleteLetter,
  disabled,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitAttempt(guess.toUpperCase(), event);
  };

  return (
    <form
      id="guessForm"
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess :</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="Please type a 5 letters word"
        disabled={disabled}
        style={{ textTransform: "uppercase" }}
        onChange={(event) => {
          const nextGuess = event.target.value;

          if (
            nextGuess > answerSize ||
            !/^[a-zA-Z]*$/g.test(event.target.value)
          )
            return;

          setGuess(nextGuess);
        }}
      />
      <VisualKeyboard
        usedLetters={usedLetters}
        pressLetter={manuallyWriteLetter}
        deleteLetter={manuallyDeleteLetter}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
