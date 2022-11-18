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
        
      <a href="/mars-holidays" >
        <div className="navbar-logo-astronaut"> <FontAwesomeIcon
              icon={faUserAstronaut}
              size={"2x"}
            /> </div>
      </a>

      <ul className="navbar-container-options">
        <li className="nowrap">
          <a href="/" className="navbar-options">
            <FontAwesomeIcon 
              className="navbar-icon"
              icon={faEarthAmericas}
              size={"1x"}
            />
            <span>Landing Page</span>
          </a>
        </li>

        <li className="nowrap">
          <a href="/learning-space" className="navbar-options">
            <FontAwesomeIcon
            className="navbar-icon"
              icon={faUserAstronaut}
              size={"1x"}
            />
             <span>Learning Space</span>
          </a>
        </li>
        <li className="nowrap">
          <a href="/mars-holidays" className="navbar-options">
            <FontAwesomeIcon
            className="navbar-icon"
              icon={faRocket}
              size={"1x"}
            />
            <span>Mars Holidays</span>
          </a>
        </li>

        <li className="nowrap">
          <a href="/images" className="navbar-options">
            <FontAwesomeIcon
            className="navbar-icon"
              icon={faStar}
              size={"1x"}
             />
            <span> Mars Rover Images</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
