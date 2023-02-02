import { Link } from "react-router-dom";
import "./LearningSpace.scss";

export function LearningSpace() {
  return (
    <div className="learning-space-container stars twinkling">
      <header>
        <h1>Learning Space</h1>
      </header>
      <main className="link-container">

        {/* Card 1 */}
        <div className="card-container">
          <Link
            id="rover-info-link"
            to={`/learning-space/mars-info`}
          >
            <div className="card-header"><h3><span>Interesting facts</span>{" "}<span className="nowrap">about Mars</span></h3></div>
            <img src={require("./images/mars-info.jpg")} className="card-image"/>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="card-container">
        <div className="card-header"><h3><span>Interesting facts</span>{" "}<span className="nowrap">about Rovers</span></h3></div>
          <Link
            id="quiz-info-link"
            to={`/learning-space/rover-info`}
          >
            <img src={require("./images/rover-info.jpg")} className="card-image"/>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="card-container">
          <div className="card-header"><h3><span>Time to test</span>{" "}<span className="nowrap">your knowledge!</span></h3></div>
          <Link
            id="mars-info-link"
            to={`/learning-space/quiz`}
          >
            <img src={require("./images/quiz.jpg")} className="card-image"/>
          </Link>
        </div>

      </main>
    </div>
  );
}
