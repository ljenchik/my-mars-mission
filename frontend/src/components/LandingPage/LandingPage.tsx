import {
  faRocket,
  faMeteor,
  faTicket,
  faCircleQuestion
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

export function LandingPage() {
  return (
    <div className="landing-page-body clouds">
      <header>
        <h1 id="landing-page-title">
          Welcome to <span className="nowrap">Mars Mission!</span>{" "}
        </h1>
      </header>
      <main id="landing-page">
        <figure>
          <img
            alt="mars image"
            src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
            className="landing-page-image loading-spinner"
          />
        </figure>

        <h3 id="landing-page-subtitle">
          <span className="nowrap">Where would you</span>{" "}
          <span className="nowrap">like to land?</span>
        </h3>

        <div className="landing-page-container">
          {/* Link 1 */}
          <div className="landing-page-item">
            <Link
              id="space"
              to={`/learning-space/space-info`}
              className="landing-page-link "
            >
              <FontAwesomeIcon
                icon={faMeteor}
                size={"1x"}
                className="menu-icon"
              />
            </Link>
            <Link
              id="space"
              to={`/learning-space/space-info`}
              className="landing-page-link"
            >
              Explore Space
            </Link>
          </div>

          {/* Link 2 */}
          <div className="landing-page-item">
            <Link
              id="rovers"
              to={`/learning-space/rover-info`}
              className="landing-page-link "
            >
              <FontAwesomeIcon
                icon={faRocket}
                size={"1x"}
                className="menu-icon"
              />
            </Link>

            <Link
              id="rovers"
              to={`/learning-space/rover-info`}
              className="landing-page-link"
            >
              Mars Rovers
            </Link>
          </div>


          {/* Link 3 */}
          <div className="landing-page-item">
            <Link
              id="learning-space"
              to={`/learning-space/quiz`}
              className="landing-page-link"
            >
              <FontAwesomeIcon
                icon={faCircleQuestion}
                size={"1x"}
                className="menu-icon"
              />
            </Link>

            <Link
              id="learning-space"
              to={`/learning-space/quiz`}
              className="landing-page-link"
            >
              Let's quiz!
            </Link>

          </div>

          {/* Link 4 */}
          <div className="landing-page-item">
            <Link
              id="mars-holidays"
              to={`/mars-holidays`}
              className="landing-page-link"
            >
              <FontAwesomeIcon
                icon={faTicket}
                size={"1x"}
                className="menu-icon"
              />
            </Link>
            <Link
              id="mars-holidays"
              to={`/mars-holidays`}
              className="landing-page-link"
            >
              Mars Holidays
            </Link>
          </div>

            {/* End of links */}
          
        </div>
      </main>
    </div>
  );
}
