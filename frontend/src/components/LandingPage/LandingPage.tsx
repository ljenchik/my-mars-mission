import {
  faGraduationCap,
  faRocket,
  faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../navigateRoot";
import "./LandingPage.scss";

export function LandingPage() {
  return (
    <div className="landing-page-body">
      <header>
        <h1>Welcome to <span className="nowrap">Mars Mission!</span> </h1>
      </header>

      <figure>
        <img
          alt="mars image"
          src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
          className="landing-page-image"
        />
      </figure>

      <p className="landing-page-subtitle">
        <span className="nowrap">Where would you</span>{" "}
        <span className="nowrap">like to land?</span>
      </p>

      <div className="landing-page-container">
        <div className="landing-page-item">
          <Link
            id="mars-holidays"
            to={`${ROOT_FOLDER}mars-holidays`}
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
            to={`${ROOT_FOLDER}mars-holidays`}
            className="landing-page-link"
          >Mars Holidays
          </Link>
        </div>

        <div className="landing-page-item">
          <Link id="images" to={`${ROOT_FOLDER}images`} className="landing-page-link">
            <FontAwesomeIcon icon={faStar} size={"1x"} className="menu-icon" />
          </Link>
          <Link id="images" to={`${ROOT_FOLDER}images`} className="landing-page-link">
            Mars Rover Images
          </Link>
        </div>

        <div className="landing-page-item">
          <Link
            id="learning-space"
            to={`${ROOT_FOLDER}learning-space`}
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
            to={`${ROOT_FOLDER}learning-space`}
            className="landing-page-link"
          >Learning Space
          </Link>
        </div>
      </div>
    </div>
  );
}
