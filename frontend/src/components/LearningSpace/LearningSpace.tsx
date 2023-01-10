import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../navigateRoot";
import "./LearningSpace.scss";

export function LearningSpace() {
  return (
    <div className="learning-space-container stars twinkling">
      <header>
        <h1>Learning Space</h1>
      </header>
      <main className="link-container">

        {/* Card 1 */}
        <div className="card">
        <div className="card-header">Interesting facts about Mars</div>
          <Link
            id="rover-info-link"
            to={`${ROOT_FOLDER}learning-space/mars-info`}
          >
            <img src={require("./images/mars-info.jpg")} className="card-image"/>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="card">
        <div className="card-header">Interesting facts about Rovers</div>
          <Link
            id="quiz-info-link"
            to={`${ROOT_FOLDER}learning-space/rover-info`}
          >
            <img src={require("./images/rover-info.jpg")} className="card-image"/>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-header">It's time to twst your knowledge</div>
          <Link
            id="mars-info-link"
            to={`${ROOT_FOLDER}learning-space/quiz`}
          >
            <img src={require("./images/quiz.jpg")} className="card-image"/>
          </Link>
        </div>

      </main>
    </div>
  );
}
