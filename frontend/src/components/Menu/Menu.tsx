import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEarthAmericas,
  faUserAstronaut,
  faRocket,
  faBars,
  faXmark,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Menu.scss";
import { Navbar } from "../Navbar/Navbar";
import { ROOT_FOLDER } from "../../navigateRoot";

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
          <a id="landing-page" href={ROOT_FOLDER} className="menu-link">
            <FontAwesomeIcon icon={faEarthAmericas} size={"1x"} className="menu-icon" />
          </a>
          <a id="landing-page" href={ROOT_FOLDER} className="menu-link">
            Landing Page
          </a>
        </li>

        <li className="menu-item">
          <a id="learning-space" href={`${ROOT_FOLDER}/learning-space`} className="menu-link">
            <FontAwesomeIcon icon={faGraduationCap} size={"1x"} className="menu-icon" />
          </a>
          <a id="learning-space" href={`${ROOT_FOLDER}/learning-space`} className="menu-link">
            Learning Space
          </a>
        </li>

        <li className="menu-item">
          <a id="mars-holidays" href={`${ROOT_FOLDER}/mars-holidays`} className="menu-link">
            <FontAwesomeIcon icon={faRocket} size={"1x"} className="menu-icon" />
          </a>
          <a id="mars-holidays" href={`${ROOT_FOLDER}/mars-holidays`} className="menu-link">
            Mars Holidays
          </a>
        </li>

        <li className="menu-item">
          <a id="images" href={`${ROOT_FOLDER}/images`} className="menu-link">
            <FontAwesomeIcon icon={faStar} size={"1x"} className="menu-icon" />
          </a>
          <a id="images" href={`${ROOT_FOLDER}/images`} className="menu-link">
            Mars Rover Images
          </a>
        </li>

      </ul>
    </nav></nav>
  );
}
