import {
  faRocket,
  faStar,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";

export function Home() {
  return (
    <div>
      <h1 className="landing-page-header">Welcome to Mars Mission!</h1>
      <img
        src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
        className="landing-page-image"
      />
      <h2 className="landing-page-header-question">
        Where would you like to land?
      </h2>

      <div className="container">

        <div className="landing-page-item">
          <a id="mars-holidays" href="/mars-holidays" className="menu-link">
            <FontAwesomeIcon
              icon={faRocket}
              size={"1x"}
              className="menu-icon"
            />
          </a>
          <a id="mars-holidays" href="/mars-holidays" className="menu-link">
            Mars Holidays
          </a>
        </div>

        <div className="landing-page-item">
          <a id="images" href="/images" className="menu-link">
            <FontAwesomeIcon icon={faStar} size={"1x"} className="menu-icon" />
          </a>
          <a id="images" href="/images" className="menu-link">
            Mars Rover Images
          </a>
        </div>

        <div className="landing-page-item">
          <a id="learning-space" href="/learning-space" className="menu-link">
            <FontAwesomeIcon
              icon={faUserAstronaut}
              size={"1x"}
              className="menu-icon"
            />
          </a>
          <a id="learning-space" href="/learning-space" className="menu-link">
            Learning Space
          </a>
        </div>
      </div>
    </div>
  );
}
