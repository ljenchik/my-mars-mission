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
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const question = Data[questionIndex];
  const [score, setScore] = useState(0);

  const handleSelectedAnswer = () => {
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  }
  return (
    <div className="quiz-container stars twinkling">
      <header>
        <h1 id="quiz-title">Let's Quiz!</h1>
        <p>Do you want to test your knowledfe about our Solar System?</p>
        {/* <Button>Start</Button> */}
      </header>
      
      <div>Score: {score}</div>
      <div className="question">
        <h3 className="question-title">{questionIndex + 1}. {question.question}</h3>
      </div>

      <div className="answers-container">
        {question.answers.map((answer) => (
          <button
            type="submit"
            onClick={handleSelectedAnswer}
          >
            {answer}
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
