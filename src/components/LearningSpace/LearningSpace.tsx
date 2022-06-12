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
      <div className="question">{question.title}</div>
      <div className="information">{question.information}</div>
      <div className="question">{question.question}</div>
      {question.answers.map((answer) => (
        <div
          onClick={() => {
            setSelectedAnswer(answer);
          }}
          className={
            selectedAnswer === answer
              ? answer.correct
                ? "highlight-correct answer"
                : "highlight-incorrect answer"
              : "answer"
          }
        >
          {answer.text}
        </div>
      ))}
      <div></div>
      <div>
        <button className="previous-button"
          onClick={() => {
            questionIndex > 0
              ? setQuestionIndex(questionIndex - 1)
              : setQuestionIndex(questionIndex);
          }}
        >
          Previous
        </button>
        <button className="next-button"
          onClick={() => {
            questionIndex < Data.length - 1
              ? setQuestionIndex(questionIndex + 1)
              : setQuestionIndex(questionIndex);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
