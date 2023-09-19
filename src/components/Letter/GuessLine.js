import React from "react";

function GuessLine({ attempt }) {
  return (
    <p className="guess">
      {attempt.map((item, index) => (
        <span key={index} className={`cell ${item.status}`}>
          {item.letter}
        </span>
      ))}
    </p>
  );
}

export default GuessLine;
