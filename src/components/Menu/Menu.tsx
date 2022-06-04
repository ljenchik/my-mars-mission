import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEarthAmericas,
  faUserAstronaut,
  faRocket,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Menu.scss";

export function Menu() {
  const [open, setOpen] = useState(true);
  return (
    <nav className="dropdown-menu">
      <button
        onClick={() => setOpen(!open)}
        hidden={!open}
        className="menu-button"
      >
        <FontAwesomeIcon icon={faBars} size={"2x"} />
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
        <FontAwesomeIcon icon={faEarthAmericas} size={"2x"} className="menu-icon"/>
          <a id="landing-page" href="/" className="menu-link">
            Landing Page
          </a>
        </li>

        <li className="menu-item">
        <FontAwesomeIcon icon={faUserAstronaut} size={"2x"} className="menu-icon"/>
          <a id="learning-space" href="/learning-space" className="menu-link">
            Learning Space
          </a>
        </li>
        <li className="menu-item">
        <FontAwesomeIcon icon={faRocket} size={"2x"} className="menu-icon"/>
          <a id="mars-holidays" href="/mars-holidays" className="menu-link">
            Mars Holidays
          </a>
        </li>
        <li className="menu-item">
        <FontAwesomeIcon icon={faStar} size={"2x"} className="menu-icon"/>
          <a id="images" href="/images" className="menu-link">
            Mars Rover Images
          </a>
        </li>
      </ul>
    </nav>
  );
}
