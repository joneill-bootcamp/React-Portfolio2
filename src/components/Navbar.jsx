import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <nav>
        <div className="nav-wrapper black accent-2 valign-wrapper white-text">
          <Link to="#" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Experience">Experience</Link>
            </li>
            <li>
              <Link to="/Education">Education</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
