import {
  faEarthAmericas,
  faRocket,
  faStar,
  faUserAstronaut,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={`/mars-holidays`}>
        <div className="navbar-logo-astronaut">
          {" "}
          <FontAwesomeIcon icon={faUserAstronaut} size={"2x"} />{" "}
        </div>
      </Link>

      <ul className="navbar-container-options">
        <li className="nowrap">
          <Link to={`/`} className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faEarthAmericas}
              size={"1x"}
            />
            <span>Landing Page</span>
          </Link>
        </li>

        <li className="nowrap">
          <Link to={`/learning-space`} className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faGraduationCap}
              size={"1x"}
            />
            <span>Learning Space</span>
          </Link>
        </li>
        <li className="nowrap">
          <Link to={`/mars-holidays`} className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faRocket}
              size={"1x"}
            />
            <span>Mars Holidays</span>
          </Link>
        </li>

        <li className="nowrap">
          <Link to={`/images`} className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faStar}
              size={"1x"}
            />
            <span> Mars Rover Images</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
