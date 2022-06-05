import {
  faEarthAmericas,
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
      <h1 className="landing-page-header">Where would you like to land?</h1>
      <div className="container">
        <div flex-grow={1}>
          <FontAwesomeIcon icon={faRocket} size={"2x"} className="menu-icon" />
          <a id="mars-holidays" href="/mars-holidays" className="menu-link">
            Mars Holidays
          </a>
        </div>
        <div flex-grow={1}>
          <FontAwesomeIcon icon={faStar} size={"2x"} className="menu-icon" />
          <a id="images" href="/images" className="menu-link">
            Mars Rover Images
          </a>
        </div>
        <div className="break"></div>
        <div>
          <FontAwesomeIcon
            icon={faUserAstronaut}
            size={"2x"}
            className="menu-icon"
          />
          <a id="learning-space" href="/learning-space" className="menu-link">
            Learning Space
          </a>
        </div>
      </div>
    </div>
  );
}
