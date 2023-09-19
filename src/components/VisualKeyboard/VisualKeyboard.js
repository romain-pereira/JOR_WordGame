import React from "react";

function VisualKeyboard({ usedLetters, pressLetter, deleteLetter, disabled }) {
  const alphabet = Array.from("AZERTYUIOPQSDFGHJKLMWXCVBN");

  function getStatusByLetter(letterToFind) {
    const foundLetter = usedLetters.find(
      (letterObject) => letterObject.letter === letterToFind
    );
    return foundLetter ? foundLetter.status : null;
  }

  return (
    <div className="keyboard-container">
      <button
        type="button"
        className="kb-input kb-delete"
        disabled={disabled}
        onClick={(event) => deleteLetter()}
      >
        &#8592;
      </button>
      {alphabet.map((letter, index) => (
        <button
          key={index}
          type="button"
          disabled={disabled}
          className={`kb-input cell ${getStatusByLetter(letter)}`}
          onClick={(event) => {
            event.preventDefault();
            pressLetter(letter);
          }}
        >
          {letter}
        </button>
      ))}

      <button type="submit" className="kb-input kb-submit" disabled={disabled}>
        ENTER
      </button>
    </div>
  );
}

export default VisualKeyboard;
