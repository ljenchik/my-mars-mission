import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Menu.scss";

export function Menu() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button onClick={() => setOpen(!open)} hidden={!open} className="menu">
        <FontAwesomeIcon icon={faBars} size={"2x"} />
      </button>
      <ul hidden={open} onClick={() => setOpen(!open)}>
        <li>
          <a id="landing-page" className="menu-item" href="/">
            Landing Page
          </a>
        </li>
        <li>
          <a id="learning-space" className="menu-item" href="/learning-space">
            Learning Space
          </a>
        </li>
        <li>
          <a id="mars-holidays" className="menu-item" href="/mars-holidays">
            Mars Holidays
          </a>
        </li>
        <li>
          <a id="images" className="menu-item" href="/images">
            Mars Rover Images
          </a>
        </li>
      </ul>
    </>
  );
}
