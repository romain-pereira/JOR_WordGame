import React from "react";

import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "../GuessInput";
import {checkGuess} from "../../game-helpers";
import GuessTable from "../GuessLine";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import EndGameBanner from "../EndGameBanner";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [attempts, setAttempts] = React.useState([]);
  const [isWin, setIsWin] = React.useState(false);
  const [usedLetters, setUsedLetters] = React.useState([]);

  const loosedOrWin = isWin || attempts.length === NUM_OF_GUESSES_ALLOWED;

  const reset = () => {
    answer = sample(WORDS);

    console.info({ answer });

    setGuess("");
    setAttempts([]);
    setIsWin(false);
    setUsedLetters([]);
  };
  const submitGuess = (guess, formEvent) => {
    if (attempts.length >= NUM_OF_GUESSES_ALLOWED || guess.length < 5) {
      return;
    }

    const nextResult = checkGuess(guess, answer);
    const nextAttempts = [...attempts, nextResult];

    addUsedLetters(nextResult);
    setIsWin(guess === answer);
    setAttempts(nextAttempts);
    setGuess("");
  };

  const addUsedLetters = (guess) => {
    const unfilteredLetter = [...usedLetters, ...guess];
    const nextUsedLetters = [
      ...new Map(unfilteredLetter.map((v) => [v.letter, v])).values(),
    ];

    setUsedLetters(nextUsedLetters);
  };

  const manuallyWriteLetter = (letter) => {
    if (guess.length >= 5 || loosedOrWin) {
      return;
    }

    const nextGuess = guess + letter;
    setGuess(nextGuess);
  };

  const manuallyDeleteLetter = () => {
    if (guess.length === 0) return;

    const nextGuess = guess.slice(0, -1);
    setGuess(nextGuess);
  };

  return (
    <>
      <div className="game-header">
        <button onClick={reset} className="reset-button">
          Reset
        </button>
      </div>
      <GuessTable
        attempts={attempts}
        maxGuess={NUM_OF_GUESSES_ALLOWED}
        wordSize={5}
      />
      <EndGameBanner
        isWin={isWin}
        attemptsCount={attempts.length}
        answer={answer}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        submitAttempt={submitGuess}
        answerSize={answer.length}
        disabled={loosedOrWin}
        usedLetters={usedLetters}
        manuallyWriteLetter={manuallyWriteLetter}
        manuallyDeleteLetter={manuallyDeleteLetter}
      />
    </>
  );
}

export default Game;
