import {
  faEarthAmericas,
  faRocket,
  faStar,
  faUserAstronaut,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Nav.Link as={Link} to="/mars-holidays">
        <div className="navbar-logo-astronaut">
          {" "}
          <FontAwesomeIcon icon={faUserAstronaut} size={"2x"} />{" "}
        </div>
      </Nav.Link>

      <Nav className="navbar-container-options">
        <Nav.Item className="nowrap">
          <Nav.Link as={Link} to="/" className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faEarthAmericas}
              size={"1x"}
            />
            <span>Landing Page</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="nowrap">
          <Nav.Link as={Link} to="/learning-space" className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faEarthAmericas}
              size={"1x"}
            />
            <span>Learning Space</span>
          </Nav.Link>
        </Nav.Item>

        <NavItem className="nowrap">
          <Nav.Link as={Link} to="/mars-holidays" className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faEarthAmericas}
              size={"1x"}
            />
            <span>Mars Holidays</span>
          </Nav.Link>
        </NavItem>

        <Nav.Item className="nowrap">
          <Nav.Link as={Link} to="/images" className="navbar-options">
            <FontAwesomeIcon
              className="navbar-icon"
              icon={faEarthAmericas}
              size={"1x"}
            />
            <span>Mars Rover Images</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
