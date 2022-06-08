import { useState } from "react";
import { Data } from "./Data";
import "./LearningSpace.scss";
export function LearningSpace() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    text: "",
    correct: false,
  });
  const question = Data[questionIndex];
  return (
    <div>
      <div>Information about space and image</div>
      <div>{question.question}</div>
      {question.answers.map((answer) => (
        <div
          onClick={() => {
            setSelectedAnswer(answer);
          }}
          className={
            selectedAnswer === answer
              ? answer.correct
                ? "highlight-correct"
                : "highlight-incorrect"
              : ""
          }
        >
          {answer.text}
        </div>
      ))}
    </div>
  );
}
