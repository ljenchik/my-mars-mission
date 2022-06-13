import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { Data } from "./Data";
import "./LearningSpace.scss";


function CountOut(props: { index: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; Data: string | any[]; }) {
  return <div>Question {props.index} out of  {props.Data.length} </div>;
}

export function LearningSpace() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    text: "",
    correct: false,
  });
  const question = Data[questionIndex];
  return (
    <div>
      <div className="question">
        <div>{question.title}</div>
        <img src={question.image} className="question-image" />
      </div>
      <div className="information">{question.information}</div>
      <div className="question">{question.question}</div>
      {question.answers.map((answer) => (
        <div
          onClick={() => {
            if (selectedAnswer === answer) {
                setSelectedAnswer({
                  text: "",
                  correct: false,
                })
            }
            else {
              setSelectedAnswer(answer);
            }
          }}
          className={
            selectedAnswer === answer
              ? answer.correct
                ? ("highlight-correct answer ")
                : "highlight-incorrect answer"
              : "answer"
          }
        >
          {answer.text}
        </div>
      ))}
      <div  className="countOut-container">
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
        <CountOut Data={Data} index={questionIndex + 1}/>
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
  );
}
