import {
  faGraduationCap,
  faRocket,
  faStar,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

export function LandingPage() {
  return (
    <div className="landing-page-body">
      <header>
        <h1>Welcome to <span className="nowrap">Mars Mission!</span> </h1>
      </header>

      <figure>
        <img
          src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
          className="landing-page-image"
        />
      </figure>

      <h4>
        <span className="nowrap">Where would you</span>{" "}
        <span className="nowrap">like to land?</span>
      </h4>

      <div className="landing-page-container">
        <div className="landing-page-item">
          <Link
            id="mars-holidays"
            to="/my-mars-mission/mars-holidays"
            className="landing-page-link"
          >
            <FontAwesomeIcon
              icon={faRocket}
              size={"1x"}
              className="menu-icon"
            />
          </Link>

          <Link
            id="mars-holidays"
            to="/my-mars-mission/mars-holidays"
            className="landing-page-link"
          >Mars Holidays
          </Link>
        </div>

        <div className="landing-page-item">
          <Link id="images" to="/my-mars-mission/images" className="landing-page-link">
            <FontAwesomeIcon icon={faStar} size={"1x"} className="menu-icon" />
          </Link>
          <Link id="images" to="/my-mars-mission/images" className="landing-page-link">
            Mars Rover Images
          </Link>
        </div>

        <div className="landing-page-item">
          <Link
            id="learning-space"
            to="/my-mars-mission/learning-space"
            className="landing-page-link"
          >
            <FontAwesomeIcon
              icon={faGraduationCap}
              size={"1x"}
              className="menu-icon"
            />
          </Link>
          <Link
            id="learning-space"
            to="/my-mars-mission/learning-space"
            className="landing-page-link"
          >Learning Space
          </Link>
        </div>
      </div>
    </div>
  );
}
