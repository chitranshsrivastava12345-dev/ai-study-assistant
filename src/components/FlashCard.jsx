import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ card, index }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`flashcard ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      {!flip ? (
        <>
          <h3>Question {index + 1}</h3>
          <p>{card.question}</p>
        </>
      ) : (
        <>
          <h3>Answer</h3>
          <p>{card.answer}</p>
        </>
      )}
    </div>
  );
}

export default Flashcard;