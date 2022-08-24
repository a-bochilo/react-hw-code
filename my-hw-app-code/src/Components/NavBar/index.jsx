import React from "react";
import { Link } from "react-router-dom";
import { NAV_BAR_DATA } from "./constants";

import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        {NAV_BAR_DATA.map(({ id, url, label }) => (
          <li className="nav-bar__link" key={id}>
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
