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
            to={`/learning-space/spaceInfo.html`}
          >
            <div className="card-header"><h3><span>Explore Space</span></h3></div>
            <img src={require("./LearningSpaceImages/mars-info.jpg")} className="card-image"/>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="card-container">
        <div className="card-header"><h3>Mars Rovers</h3></div>
          <Link
            id="quiz-info-link"
            to={`/learning-space/rover-info`}
          >
            <img src={require("./LearningSpaceImages/rover-info.jpg")} className="card-image"/>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="card-container">
          <div className="card-header"><h3><span>Let's quiz!</span></h3></div>
          <Link
            id="mars-info-link"
            to={`/learning-space/quiz`}
          >
            <img src={require("./LearningSpaceImages/quiz.jpg")} className="card-image"/>
          </Link>
        </div>

      </main>
    </div>
  );
}
