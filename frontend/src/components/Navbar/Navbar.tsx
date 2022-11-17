import {
  faEarthAmericas,
  faRocket,
  faStar,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
        
      <a href="/mars-holidays">
        <img
          className="navbar-image"
          src="https://cdn-icons-png.flaticon.com/512/1000/1000613.png?w=360"
        />{" "}
      </a>

      <ul className="navbar-container-options">
        <li className="nowrap">
          <a href="/" className="navbar-options">
            <FontAwesomeIcon
              icon={faEarthAmericas}
              size={"1x"}
              className="navbar-logo"
            />
            <span>Landing Page</span>
          </a>
        </li>

        <li className="nowrap">
          <a href="/learning-space" className="navbar-options">
            <FontAwesomeIcon
              icon={faUserAstronaut}
              size={"1x"}
              className="navbar-logo"
            />
             <span>Learning Space</span>
          </a>
        </li>
        <li className="nowrap">
          <a href="/mars-holidays" className="navbar-options">
            <FontAwesomeIcon
              icon={faRocket}
              size={"1x"}
              className="navbar-logo"
            />
            <span>Mars Holidays</span>
          </a>
        </li>

        <li className="nowrap">
          <a href="/images" className="navbar-options">
            <FontAwesomeIcon
              icon={faStar}
              size={"1x"}
              className="navbar-logo"
             />
            <span> Mars Rover Images</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
