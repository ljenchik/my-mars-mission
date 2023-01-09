import { useState } from "react";
import { Data } from "./Data";
import "./Quiz.scss";

function CountOut(props: { Data: any; index: string | number }) {
  return (
    <div>
      Question {props.index} out of {props.Data.length}{" "}
    </div>
  );
}

export function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    text: "",
    correct: false,
  });

  const question = Data[questionIndex];
  return (
    <div className="main-container">
      
      <div className="question">
        <h3 className="question-title">{question.title}</h3>
        <img src={question.image} className="question-image" />
      </div>

      <div className="information">{question.information}</div>
      <div className="question-question">{question.question}</div>
      <div className="answers-container">
        {question.answers.map((answer) => (
          <button
            type="submit"
            onClick={() => {
              if (selectedAnswer !== answer) {
                setSelectedAnswer(answer);
              }
            }}
            className={
              selectedAnswer === answer
                ? answer.correct
                  ? "highlight-correct answer "
                  : "highlight-incorrect answer"
                : "answer"
            }
          >
            {answer.text}
          </button>
        ))}
      </div>
      <div className="button-count-container">
        <div>
          <button
            className="previous-button"
            onClick={() => {
              questionIndex > 0
                ? setQuestionIndex(questionIndex - 1)
                : setQuestionIndex(questionIndex);
            }}
          >
            Previous
          </button>
        </div>

        <div className="count">
          <CountOut Data={Data} index={questionIndex + 1} />
        </div>

        <div>
          <button
            className="next-button"
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
    </div>
  );
}
