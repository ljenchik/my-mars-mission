import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEarthAmericas,
  faRocket,
  faBars,
  faXmark,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Menu.scss";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export function Menu() {
  const [open, setOpen] = useState(true);
  return (
    <nav className="nav-display">
      <Navbar />
      <nav className="dropdown-menu">
        <button
          onClick={() => setOpen(!open)}
          hidden={!open}
          className="menu-button"
        >
          <FontAwesomeIcon icon={faBars} size={"3x"} />
        </button>

        <ul hidden={open} onClick={() => setOpen(!open)} className="menu-list">
          <button
            onClick={() => setOpen(open)}
            hidden={open}
            className="menu-cross-button"
          >
            <FontAwesomeIcon icon={faXmark} size={"2x"} />
          </button>

          <li className="menu-item">
            <Link to={`/`} className="menu-link">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                size={"1x"}
                className="menu-icon"
              />
            </Link>
            <Link to={`/`} className="menu-link">
              Landing Page
            </Link>
          </li>

          <li className="menu-item">
            <Link to={`/learning-space`} className="menu-link">
              <FontAwesomeIcon
                icon={faGraduationCap}
                size={"1x"}
                className="menu-icon"
              />
            </Link>
            <Link to={`/learning-space`} className="menu-link">
              Learning Space
            </Link>
          </li>

          <li className="menu-item">
            <Link to={`/mars-holidays`} className="menu-link">
              <FontAwesomeIcon
                icon={faRocket}
                size={"1x"}
                className="menu-icon"
              />
            </Link>
            <Link to={`/mars-holidays`} className="menu-link">
              Mars Holidays
            </Link>
          </li>

          <li className="menu-item">
            <Link to={`/images`} className="menu-link">
              <FontAwesomeIcon
                icon={faStar}
                size={"1x"}
                className="menu-icon"
              />
            </Link>
            <Link to={`/images`} className="menu-link">
              Mars Rover Images
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
